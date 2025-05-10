import type { FavoriteProduct, ProductRequest } from "~/interfaces/Producto";

export const useProduct = () => {
  const addProduct= async (product:ProductRequest)=>{
    const {$api} = useNuxtApp();
    try {
      //peticion
      const response = await $api.post('/api/products/products/',product);
      console.log("Producto agregado",response);
      //useProduct
      const productStore = useProductStore();
      //recargamos productos
      productStore.loadProducts();
    } catch (e) {
      console.log("Error al enviar Producto",e)
    }
  };
  //para agregar favorito//para probar sin cookie con token jwt
  const addFavoriteProduct= async(idProduct:number)=>{
    const {$api} = useNuxtApp();
    try{
      const response = await $api.post<FavoriteProduct>('/api/products/favorite-product/',{
        product:idProduct
      });
      console.log(response.data);
    }
    catch(e){
      console.log("Error al enviar Producto Favorito")
    }
  }
  //para eliminar favoriteProduct
  const deleteFavoriteProduct= async (idProduct:number)=>{
    const {$api} = useNuxtApp();
    try {
      const response=await $api.delete<{message:string}>(`/api/products/favorite-product/${idProduct}/`);
      console.log(response.data)
    } catch (e) {
      console.error("Error al eliminar:",e)
    }
  }
  return {addProduct,addFavoriteProduct,deleteFavoriteProduct}
}
