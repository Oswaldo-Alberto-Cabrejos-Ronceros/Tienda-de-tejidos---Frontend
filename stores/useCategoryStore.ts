import { defineStore } from 'pinia'
import categories from '@/assets/categories.json'
import type { Category } from '~/services/Category/domain/models/Category'

export const useCategoryStore  = defineStore('category',{
  state: () => ({
    categories: categories as Category []
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
    //cargar categorias de sessionStorange
    recoverCategories(){
      const saveCategories = sessionStorage.getItem('categories');
      if(saveCategories) this.categories=JSON.parse(saveCategories);
    }
  }
})
