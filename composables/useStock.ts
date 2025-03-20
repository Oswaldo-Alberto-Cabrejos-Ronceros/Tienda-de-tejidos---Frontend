import type { Stock, StockStrict } from "~/interfaces/Producto";

export const useStock = () => {
  //obtener stock de un product por id
  const getStockByIdProduct = async (id: number | null): Promise<StockStrict[]> => {
    //instancia de axios
    if (id === null) return [];
    try {
      const { $api } = useNuxtApp();
      const response = await $api.get(
        `/api/products/product-stock/product/${id}/`
      );
      return response.data as StockStrict[];
    } catch (e) {
      console.log(`Error al obtener el stock del producto:${id}`, e);
      return [];
    }
  };
  //obtener stock
  const getStockById = async (id: number | null): Promise<Stock> => {
    //instancia de axios
    if (id === null) return {};
    try {
      const { $api } = useNuxtApp();
      const response = await $api.get(`/api/products/product-stock/${id}/`);
      //retornamos los datos
      return response.data as Stock;
    } catch (e) {
      console.log("Error al obtener stock", e);
      return {};
    }
  };
  //metodo para actualizar stock
  const updateStockElement = async (
    id: number | null,
    newsStock: number | null
  ) => {
    if (id === null || newsStock === null) return {};
    //llamada a api
    try {
      //instancia de axios
      const { $api } = useNuxtApp();
      const response = await $api.patch(
        `/api/products/product-stock/${id}/`,
        {stock:Number(newsStock)}
      );
      console.log(response.data)
      return response.data as Stock
    } catch (e) {
      console.log(`Error al actualizar stock de :${id}`, e);
      return {};
    }
  };
  //metodo para agregar/enviar stock conjunto
  const addStockConjunto = async(stock:Stock):Promise<Stock>=>{
    //instancia de axios
    const {$api} = useNuxtApp();
    try {
      const response = await $api.post('/api/products/product-stock/',stock);
      return response.data;
    } catch (error) {
      console.error("Error al agregar stock conjunto");
    }
    return {};
  };
  return { getStockByIdProduct, getStockById,updateStockElement,addStockConjunto };
};
