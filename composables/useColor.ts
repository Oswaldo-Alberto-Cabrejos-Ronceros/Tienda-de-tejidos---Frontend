import type { Color } from "~/interfaces/Producto"

export const useColor = () => {
  const addColor= async (color:Color)=>{
    //varible de axios
    const {$api} = useNuxtApp();
    try{
      //peticion post
      const response = await $api.post('/api/products/product-color/',color);
      //creamos instancia de colorStore
      const colorStore = useColorStore();
      console.log("Color agregado agregado:",response)
      //cargamos de nuevo los colores
      colorStore.loadColors();
    } catch(e){
      console.log("Error al agregar color",e)
    }
  }
  return {
    addColor
  }
}
