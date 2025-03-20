import { defineStore } from 'pinia'
import type { GenderStrick } from '~/interfaces/Producto'

export const useGenderStore = defineStore('gender',{

  state: () => ({ 
    genders:[] as GenderStrick[]
  }),
  getters:{

  },
  actions: {
    //para cargar 
    async loadGenders(){
      //instancia de axios
      const {$api} = useNuxtApp();
      try {
        //obtenemos datos del backend
        const response = await $api.get('/api/products/gender/');
         //guardamos en el stade
         this.genders=response.data as GenderStrick [];
         //guardamos en sessionStorange
         sessionStorage.setItem('genders',JSON.stringify(this.genders));
      } catch (e) {
        console.error("Error al cargar los generos")
      }
    },
    //recuperar genders del store
    recoverGenders(){
      const savedGenders = sessionStorage.getItem('genders');
      if(savedGenders) this.genders=JSON.parse(savedGenders) as GenderStrick [];
    }
  }
})
