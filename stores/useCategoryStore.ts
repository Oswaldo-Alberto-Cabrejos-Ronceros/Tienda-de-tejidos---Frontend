import { defineStore } from 'pinia'
import categories from '@/assets/categories.json'
import type { Categoria } from '~/interfaces/Categoria'

export const useCategoryStore  = defineStore('category',{
  state: () => ({
    categories: categories as Categoria []
   }),
   getters:{
    searchCategoryByName:(state)=>{
      return (categoryName:string)=> state.categories.find(cat=>cat.name===categoryName)?.id
    },
    searchCategoryById:(state)=>{
      return (id:number|undefined)=> state.categories.find(cat=>cat.id===id)?.name
    }
   },
  actions: {
    //cargar categorias
    async loadCategories(){
      const {$api} = useNuxtApp();
      try{
        const response = await $api.get(`/api/products/categories/`);
        this.categories = response.data as Categoria[];
        //guardamos en sessionStorange
        sessionStorage.setItem('categories',JSON.stringify(this.categories))
      } catch(error){
        console.log("Error al cargar las categorias",error)
      }
    },
    //cargar categorias de sessionStorange
    recoverCategories(){
      const saveCategories = sessionStorage.getItem('categories');
      if(saveCategories) this.categories=JSON.parse(saveCategories);
    }
  }
})
