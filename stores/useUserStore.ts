import { defineStore } from 'pinia'
import type { Usuario } from '~/interfaces/Usuario';

export const useUserStore = defineStore('user',{
  state: () => ({
    userData:null as Usuario|null
   }),
   getters:{
    isAuthenticated:(state)=>!!state.userData
   },
  actions: {
    setUserData(data:Usuario){
      this.userData=data
      sessionStorage.setItem('userData',JSON.stringify(data))
    },
    loadFromSession(){
      const userData = sessionStorage.getItem('userData');
      userData? this.userData=JSON.parse(userData) as Usuario:this.userData=null;
    },
    cleanUserData(){
      this.userData=null;
      sessionStorage.removeItem('userData')
    },
      //poner action que obtenga de nuevo el user al recargar pagina
    async recoverUserData(){
      const {$api}=useNuxtApp();
      try{
        const response = await $api.get(`/auth/user/`);
        console.log("usuario",response.data)
        this.setUserData(response.data as Usuario)
      }catch(error){
        console.error("Error al obtener la informacion de usuario",error)
      }
    }
  }
})
