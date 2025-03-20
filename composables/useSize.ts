import type { Size } from "~/interfaces/Producto"

export const useSize = () => {
  const addSize = async (size:Size)=>{
    const {$api} = useNuxtApp();
    try {
      //peticion
      const response = $api.post('/api/products/product-size/',size);
      console.log("Talla agregada correctamente:",response);
      //use Size
      const sizeStore= useSizeStore();
      //recargamos las tallas
      sizeStore.loadSizes();
    } catch (e) {
      console.log("Error al agregar talla",e)
    }
  }
  return {addSize}
}
