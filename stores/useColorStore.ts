import { defineStore } from 'pinia'
import type { ColorStrict } from '~/interfaces/Producto'

export const useColorStore = defineStore('color',{
  state: () => ({ 
    colors:[] as ColorStrict[]
  }),
  getters:{

  },
  actions: {
    //cargar colores
    async loadColors(){
      const {$api}=useNuxtApp();
      try{
        const response = await $api.get("/api/products/product-color");
        //estado
        this.colors = response.data as ColorStrict[];
        //guardamos en sessionStorange
        sessionStorage.setItem('colors',JSON.stringify(this.colors));
      } catch(e){
        console.log("Error al cargar los colores",e)
      } 
    },
    //para
    recoverColors(){
      const savedColors = sessionStorage.getItem('colors');
      if(savedColors) this.colors= JSON.parse(savedColors);
    }
  }
})
