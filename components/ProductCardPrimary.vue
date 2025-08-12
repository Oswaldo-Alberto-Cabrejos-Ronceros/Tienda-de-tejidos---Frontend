<template>
  <NuxtLink
    :to="
      isAdmin
        ? `/admin/productos/${product.id}`
        : `/productos/${categoryName}/${product.id}`
    "
  >
    <div
      class="h-auto w-72 flex flex-col text-zinc-800 transition-all duration-150 border-solid border-2 border-transparent gap-3 rounded-t-lg hover:border-pink-500"
    >
      <div>
        <img
          class="w-full h-[288px] object-cover rounded-t-lg"
          :src="product.variants[0].images[0]"
          :alt="product.name"
        />
      </div>
      <div class="flex flex-col items-start justify-center gap-3 px-1">
        <p class="text-base">
          {{ product.name }}
        </p>
        <p class="text-base font-bold">
          S/ {{ " " + product.variants[0].price }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { ProductWithVariants } from "~/services/Product/domain/models/ProductWithVariants";

const props = defineProps<{
  product: ProductWithVariants;
  isAdmin?: boolean;
  categoryName: string;
}>();
</script>
