<template>
  <NuxtLink :to="`/productos/${categoryName}/${product.id}`">
  <div class="h-auto w-56 flex flex-col items-center justify-center text-zinc-800 transition-all duration-150 border-solid border-2 border-transparent gap-1 hover:border-pink-500">
    <div>
<img class="w-full h-[224px] object-cover" :src="product.images[0]" :alt="product.name">
    </div>
      <p class="text-base">
{{ product.name }}
      </p>
      <p class="text-xl">
        S/ {{ " " + product.price }}
      </p>
  </div></NuxtLink>
</template>

<script lang="ts" setup>
import type { Producto } from '~/interfaces/Producto';
const props = defineProps<{
product:Producto
}>();
//obtenemos nombre de categoria
const categoryStore = useCategoryStore();
const {searchCategoryById}=categoryStore;
const categoryName = searchCategoryById(props.product.category)
</script>

<style>

</style>