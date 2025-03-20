<template>
  <div class="w-full flex flex-col items-center justify-center py-1 pb-4">  <h3 class="text-3xl font-semibold">{{ categoria }}</h3>
  <div class="text-zinc-800 w-[90%] flex flex-col gap-6">
    <div class="w-full flex justify-between pt-1">
      <FiltersComponent/> <OrdenarComponent/>
    </div>
    <div class="w-full grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-y-2 ">
        <div v-for="producto in productos" class="flex items-center justify-center ">
      <ProductCardPrimary  :product="producto"/>
    </div>
    </div>
  </div></div>

</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import type { Producto } from '~/interfaces/Producto';
import { useProductStore } from '#imports';
//obtenemos la categoria de la ruta
const route=useRoute();
const categoria = route.params.categoria;
const useCategory=useCategoryStore();
//obtenemos la funcion que busca nombre de la categoria por id
const {searchCategoryByName}=useCategory;
const categoryId = searchCategoryByName(categoria as string);
//productos de categoria--despues implementar solicitud api por store Producto
const productStore=useProductStore();
onMounted(()=>{async()=>{
  productStore.recoverProducts();
  if(!productStore.products.length){
    await productStore.loadProducts()
  }
}
})
const productos = computed(()=>productStore.getProductsByCategory(categoryId||0)) ;
</script>

<style>

</style>