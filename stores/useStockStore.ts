import { defineStore } from 'pinia'
import type { StockStrict } from '~/interfaces/Producto'

export const useStockStoreStore = defineStore('stock',{
  state: () => ({
    stocks: [] as StockStrict[]
   }),
   getters:{

   },
  actions: {
    //cargar stock
    async loadStocks(){
      const {$api} = useNuxtApp();
      try{  
        const response= await $api.get("/api/products/product-stock/");
        //guardamos en state
        this.stocks=response.data as StockStrict[];
        //no guardamos en session porque el stock cambia constantemente
      } catch(e){
        console.log("Error al cargar Stocks")
      }
    }
  }
})
