import { defineStore } from 'pinia'
import type { SizeStrict } from '~/interfaces/Producto'

export const useSizeStore = defineStore('size',{
  state: () => ({ 
    sizes:[] as SizeStrict[]
  }),
  getters:{
    
  },
  actions: {
    async loadSizes(){
      const {$api}=useNuxtApp();
      try{
        const response = await $api.get("/api/products/product-size");
        console.log("Tallas recibidas",response);
        //guardamos en estado
        this.sizes=response.data as SizeStrict[];
        //guadamos en localStorange
        sessionStorage.setItem('sizes',JSON.stringify(this.sizes));
      } catch(e){
          console.log("Error al cargar las tallas",e)
      }
    },
    //para recuperar de session
    recoverSizes(){
      const savedSizes = sessionStorage.getItem('sizes');
      if(savedSizes) this.sizes=JSON.parse(savedSizes);
    }
  }
})
