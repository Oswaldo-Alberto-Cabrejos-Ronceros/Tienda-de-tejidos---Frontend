<template>
  <div class="w-full h-auto flex flex-col py-1">
    <AdminProductAddForm @send-product="sendProduct"/>
  </div>
</template>

<script lang="ts" setup>
import type { ProductRequest } from '~/services/Product/domain/models/ProductRequest';

definePageMeta({
  layout:'admin'
});
//enviar al backend
const sendProduct= async (product:ProductRequest)=>{
  //funcion de useProduct
  const {create}= useProductt();
  await create(product);
  navigateTo('/admin/productos/');
}
</script>

