<template>
  <!-- principal -->
  <div class="w-full h-auto flex flex-col py-1 px-2">
    <!-- parte superios de titulo y busqueda -->
  <div class="w-full flex items-center justify-start py-1 gap-4">
    <h3 class="text-3xl font-semibold text-zinc-800">Productos</h3>
    <SearchComponent/>
  </div>
  <!-- seccion de filtros -->
  <div class="w-full flex justify-between pt-2">
      <FiltersComponent/> <OrdenarComponent/>
    </div>
    <!-- seccion de productos -->
     <div class="w-full h-auto grid grid-cols-3 py-4">
      <div class="flex items-center justify-center "><NuxtLink to="/admin/productos/agregar"><AdminCartAdd  :title="CardAddTitle"/></NuxtLink> </div>
      
      <div class="flex items-center justify-center" v-for="product in products" ><ProductCardPrimary :product="product" :is-admin="true" /></div>
    </div>
     </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'admin'
});
const CardAddTitle:string="Producto";
//product store
const productStore = useProductStore();
onMounted(()=>{
productStore.recoverProducts();
if(!productStore.products.length){
  productStore.loadProducts();
}
});
const products = computed(()=>productStore.getProducts);
</script>
