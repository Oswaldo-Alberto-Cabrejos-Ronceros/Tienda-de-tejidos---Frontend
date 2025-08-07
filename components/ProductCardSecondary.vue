<template>
  <NuxtLink :to="`/productos/${categoryName}/${product.id}`">
    <div
      class="h-auto w-56 flex flex-col items-center justify-center text-zinc-800 transition-all duration-150 border-solid border-2 border-transparent gap-1 hover:border-pink-500"
    >
      <div>
        <img
          class="w-full h-[224px] object-cover"
          :src="product.variants[0].images[0]"
          :alt="product.name"
        />
      </div>
      <p class="text-base">
        {{ product.name }}
      </p>
      <p class="text-xl">S/ {{ " " + product.variants[0].price }}</p>
    </div></NuxtLink
  >
</template>

<script lang="ts" setup>
import type { ProductWithVariants } from "~/services/Product/domain/models/ProductWithVariants";
const props = defineProps<{
  product: ProductWithVariants;
}>();
//obtenemos nombre de categoria
const { findById } = useCategory();
onMounted(async () => {
  categoryName.value = (await findById(props.product.categoryId)).name;
});
const categoryName = ref<string>("");
</script>

