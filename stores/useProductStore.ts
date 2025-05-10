import { defineStore } from "pinia";
import type { FavoriteProduct, Producto } from "~/interfaces/Producto";
export const useProductStore = defineStore("product", {
  state: () => ({
    products: [] as Producto[],
    favoriteProducts: [] as FavoriteProduct[],
  }),
  getters: {
    //por mientras
    getProducts: (state) => state.products,
    getProductsByCategory: (state) => (category: number | null) =>
      state.products.filter((product) => product.category === category),
    getProductById: (state) => (id: number | null) =>
      state.products.find((product) => product.id === id),
    //obtener los productos favoritos con todos sus datos para mostrar en pantalla
    getFavoritesProductsToProduct:
      (state) => (favoriteProducts: FavoriteProduct[]) => {
        return favoriteProducts
          .map((favorite) =>
            state.products.find((product) => product.id === favorite.product)
          )
          .filter(Boolean) as Producto[];
      },
      isFavoriteProduct:(state)=>(idProduct:number)=>{
       return !! state.favoriteProducts.find((product)=>product.product===idProduct);
      }
  },
  actions: {
    //aqui se pone logica de llamada a api
    //cargar productos
    async loadProducts() {
      const { $api } = useNuxtApp();
      try {
        const response = await $api.get(`/api/products/products/`);
        console.log("Productos:", response.data);
        this.products = response.data as Producto[];
        //guardamos datos en sessionStorage
        sessionStorage.setItem("products", JSON.stringify(this.products));
      } catch (error) {
        console.log("Error al obtener los productos");
      }
    },
    recoverProducts() {
      //recuperamos los productos de sessionStorange
      const savedProducts = sessionStorage.getItem("products");
      if (savedProducts) this.products = JSON.parse(savedProducts);
    },
    //por siaca para conseguir productos por categoria de la api
    async loadProductFromCategory(id: number) {},
    //cargar productos mas vendimos
    async loadProductBestSale() {},
    //para cargar productosFavoritos
    async loadFavoriteProducts() {
      const { $api } = useNuxtApp();
      try {
        const response = await $api.get<FavoriteProduct[]>(
          "api/products/favorite-product/"
        );
        //pasamos a state
        this.favoriteProducts = response.data;
        //guardamos en sessionStorange
        sessionStorage.setItem(
          "favorite-products",
          JSON.stringify(this.favoriteProducts)
        );
      } catch (e) {
        console.error("Error al obtener los productos favoritos");
      }
    },
    //para recuperar los productos favoritos
    recoverFavoriteProducts() {
      const savedFavoriteProducts = sessionStorage.getItem("favorite-products");
      if (savedFavoriteProducts) {
        this.favoriteProducts = JSON.parse(
          savedFavoriteProducts
        ) as FavoriteProduct[];
      }
    },
  },
});
