<template>
  <div class="w-full h-auto flex flex-col py-4 gap-4 items-center">
    <ProductCardPrincipal :product="product" :is-admin="true" />
  </div>
</template>

<script lang="ts" setup>
//le aplicamos el layout admin
import { useRoute } from "vue-router";
//importamos async computed
import type { ProductWithVariants } from "~/services/Product/domain/models/ProductWithVariants";
definePageMeta({
  layout: "admin",
});

//instanciamos route
const route = useRoute();
const { id } = route.params;
const idParsed = Number(id);
//instanciamos productStore
const { findByIdWithVariants } = useProductt();
const product = ref<ProductWithVariants | undefined>(undefined);
//al montar cargamos los productos
onMounted(async () => {
  product.value = await findByIdWithVariants(idParsed);
});
</script>
