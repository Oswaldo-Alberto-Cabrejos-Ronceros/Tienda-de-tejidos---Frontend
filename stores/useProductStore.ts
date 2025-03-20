import { defineStore } from 'pinia'
import type { Producto } from '~/interfaces/Producto'
export const useProductStore = defineStore('product',{
  state: () => ({ 
    products:[] as Producto[],
  }),
  getters:{
    //por mientras
    getProducts:(state)=> state.products,
    getProductsByCategory:(state)=>(category:number|null)=>state.products.filter((product)=> product.category===category),
    getProductById:(state)=>(id:number|null)=>state.products.find((product)=>product.id===id)
  },
  actions: {
    //aqui se pone logica de llamada a api
    //cargar productos
    async loadProducts(){
      const {$api}=useNuxtApp();
      try{
        const response = await $api.get(`/api/products/products/`);
        console.log("Productos:",response.data);
        this.products=response.data as Producto[];
        //guardamos datos en sessionStorage
        sessionStorage.setItem('products',JSON.stringify(this.products))
      } catch(error){
        console.log("Error al obtener los productos")
      }
    },
    recoverProducts(){
      //recuperamos los productos de sessionStorange
      const savedProducts=sessionStorage.getItem('´products');
      if(savedProducts) this.products=JSON.parse(savedProducts);
    }
    ,
    //por siaca para conseguir productos por categoria de la api
    async loadProductFromCategory(id:number){

    },
    //cargar productos mas vendimos 
    async loadProductBestSale(){

    }
  }
})
