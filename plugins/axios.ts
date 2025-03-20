import axios from 'axios'
import { useAuthStore } from '~/stores/useAuthStore';
export default defineNuxtPlugin((nuxtApp) => {

const config = useRuntimeConfig();
const baseURL = config.public.apiBase as string;
const api = axios.create({
    baseURL:baseURL,
    timeout:5000,
    headers:{'Content-Type':'application/json'},
    withCredentials:true
});

//manejo en caso de repuesta errone
api.interceptors.response.use((response)=>response,
async (error)=>{
    const authStore=useAuthStore();
    const originalRequest = error.config;
    if(error.response?.status===401 && !originalRequest._retry){
        originalRequest._retry=true;
        try{
            //intentamos refrescar token
            await authStore.refreshingToken();
            return api(originalRequest);
        } catch(RefreshError){
            authStore.logout();//si falla el refresco, cerrar sesion
            return Promise.reject(RefreshError)
        }
    }
    return Promise.reject(error);
});
return {
    provide:{
        api
    }
}
})
