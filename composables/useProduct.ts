import type { Producto } from "~/interfaces/Producto";

export const useProduct = () => {
  const addProduct= async (product:Producto)=>{
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
  }
  return {addProduct}
}
