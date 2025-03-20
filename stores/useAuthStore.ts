import { defineStore } from 'pinia'
import type { LoginResponse, RefreshResponse, RegisterForm } from '~/interfaces/auth'
import { useUserStore } from './useUserStore';
import type { Usuario } from '~/interfaces/Usuario';

export const useAuthStore = defineStore('auth',{
  state: () => ({
    accessToken:null,
    refreshToken:null
   }),
  actions: {
    //registro
    async register(request:RegisterForm){
      const config = useRuntimeConfig();
      try{
        const {user}=await $fetch<LoginResponse>(`${config.public.apiBase}/auth/register/`,{method:"POST",
          body:{
            email:request.email,
            first_name:request.first_name,
            last_name:request.last_name,
            phone:request.phone,
            password:request.password,
            role:'client'
          },
          credentials:'include'
        });
        if(user){
          const userStore=useUserStore();
          userStore.setUserData(user as Usuario); 
          navigateTo('/');
        }
      } catch(error){
        console.log("Error al registrar")
      }

    },
    //login
    async login(email:string,password:string){
      const config = useRuntimeConfig();
      try{
        const {user}= await $fetch<LoginResponse>(`${config.public.apiBase}/auth/login/`,{method:'POST',
          body:{
            email:email,
            password:password
          },
          credentials:'include'
        });
        if(user){
          const userStore = useUserStore();
          userStore.setUserData(user as Usuario);
          navigateTo('/')
        }
      } catch(error){
        console.error("Credenciales incorrectas",error)
        alert("Credenciales incorrectas")
      }
    },
    //refrescar token
    async refreshingToken(){
      const config = useRuntimeConfig();
      try{
        await $fetch<RefreshResponse>(`${config.public.apiBase}/auth/token/refresh/`,{method:'POST',
          credentials:'include'
        });
      } catch(error){
        this.logout();
        console.error("Error al refrescar token",error)
      }
    },
    //cerrar sesion
    async logout(){
      const config = useRuntimeConfig();
      //eliminamos las coockies
      const userStore=useUserStore();
      //limpiamos session storange
      userStore.cleanUserData();
      //eliminamos cookies
      try{
        const {message} = await $fetch<{message:string}>(`${config.public.apiBase}/auth/logout/`,
          {
            method:"POST",
            credentials:"include"
          }
        );
        console.log(message);
      } catch(error){
        console.log("Error al cerrar sesion, no se encontraron las cookies",error)
      }
      //redirigimos al login
      navigateTo('/');
    },

  }
})
