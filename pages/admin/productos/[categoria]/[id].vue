<template>
  <!-- modal add stock conjunto -->
<ModalGeneric
:show-value="showModalAddConjuntoStock"
:component="AdminStockAddConjunto"
@send-element="sendStockConjunto"
@update:show-value="handleModalAddConjuntoStock"/>
  <!-- modal add stock element-->
  <ModalGeneric
    :show-value="showModalAddStockElement"
    :component="AdminAddStockElement"
    :props="idStockSelected"
    @send-element="updateStock"
    @update:show-value="handleModalAddStockElement"
  />
  <div class="w-full h-auto flex flex-col py-4 gap-4 items-center">
    <ProductCardPrincipal :product="product" :is-admin="true" />
    <h3 class="text-2xl text-zinc-800 font-semibold self-start">Stock</h3>
    <AdminTableEdit
      :titles="tableStockTitles"
      :data="stocks"
      :message-empty="messageEmptyTable"
      @update:item="showUpdateAgregarStock"
    />
    <div class="h-auto w-32">
      <ButtonSecondary @click="handleModalAddConjuntoStock" :title="buttonAddConjuntoStockTitle"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
//le aplicamos el layout admin
import { useRoute } from "vue-router";
//componente para modal add stock element
import AdminAddStockElement from "~/components/AdminAddStockElement.vue";
//componente para modal add stock conjunto
import AdminStockAddConjunto from "~/components/AdminStockAddConjunto.vue";
//importamos async computed
import { asyncComputed } from "@vueuse/core";
import { useStock } from "../../../../composables/useStock";
definePageMeta({
  layout: "admin",
});

//instanciamos route
const route = useRoute();
const { categoria, id } = route.params;
const idParsed = Number(id);
//instanciamos productStore
const productStore = useProductStore();
//al montar cargamos los productos
onMounted(async () => {
  productStore.recoverProducts();
  if (!productStore.products.length) {
    await productStore.loadProducts();
  }
});
//obtenemos el producto por su id
const product = asyncComputed(async () => {
  productStore.recoverProducts();
  if (!productStore.products.length) {
    await productStore.loadProducts();
  }
  return productStore.getProductById(idParsed);
}, undefined);
//titles para la tabla
const tableStockTitles: string[] = ["Color", "Talla", "Stock"];
//obtenemos los stocks
const { getStockByIdProduct } = useStock();
const stocks = asyncComputed(async () => {
  if (!product) return [];

  const data = await getStockByIdProduct(product.value?.id || null);

  // Aseguramos que cada objeto tenga un id, usando un indice si falta
return data
}, []);
//mensaje en caso de empty
const messageEmptyTable:string="stocks";
//para modal
const showModalAddStockElement = ref(false);
const handleModalAddStockElement = () => {
  showModalAddStockElement.value = !showModalAddStockElement.value;
};
//propiedad para el formaddStockElement
const idStockSelected = ref({ idStock: 0 });
//funcion para manejar evento update y abri modal
const showUpdateAgregarStock = (id: number) => {
  //cambiamos el stockelElementSelected
  idStockSelected.value.idStock = id;
  //abrimos modal stock element
  handleModalAddStockElement();
};
//funcion para actualizar stock
const updateStock = async (newStock: any) => {
  const { updateStockElement } = useStock();
  console.log(newStock);
  await updateStockElement(idStockSelected.value.idStock, newStock);
  stocks.value = await getStockByIdProduct(product.value?.id || null);
  //cerrmos modal
  handleModalAddStockElement();
};

//concerniente al agregar conjunto stock
const buttonAddConjuntoStockTitle:string="Agregar"
//modal agregar conjunto Stock
const showModalAddConjuntoStock=ref(false);
const handleModalAddConjuntoStock = ()=>{
  showModalAddConjuntoStock.value=!showModalAddConjuntoStock.value;
};
//manejo del envio del formulario addStockConjunto
const sendStockConjunto = async (stock:any)=>{
  //al formulario le agregamos el product
  stock.product=idParsed;
  const {addStockConjunto} = useStock();
  const response = await addStockConjunto(stock);
  console.log(response);
  stocks.value = await getStockByIdProduct(product.value?.id || null);
  handleModalAddConjuntoStock();
}
</script>
