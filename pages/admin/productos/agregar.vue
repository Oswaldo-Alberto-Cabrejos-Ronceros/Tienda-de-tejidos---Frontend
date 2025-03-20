<template>
  <div class="w-full h-auto flex flex-col py-1">
    <AdminProductAddForm @send-product="sendProduct"/>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout:'admin'
});
//enviar al backend
const sendProduct=(product:any)=>{
  //funcion de useProduct
  const {addProduct}= useProduct();
  addProduct(product);
  navigateTo('/admin/productos/');
}
</script>

