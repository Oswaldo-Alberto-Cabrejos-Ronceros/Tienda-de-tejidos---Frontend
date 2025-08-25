<template>
  <div class="w-full h-auto flex flex-col py-1">
    <AdminProductAddForm @send-product="sendProduct" />
  </div>
</template>

<script lang="ts" setup>
import type { ProductWithVariantSchema } from "~/interfaces/ProductWithVariantSchema";

definePageMeta({
  layout: "admin",
});
//enviar al backend
const sendProduct = async (product: ProductWithVariantSchema) => {
  console.log("Producto a enviar:", product.image);
  //funcion de useProduct
  const { createWithVariant } = useProductt();
  await createWithVariant(product);
  navigateTo("/admin/productos/");
};
</script>
