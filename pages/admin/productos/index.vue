<template>
  <!-- principal -->
  <div class="w-full h-auto flex flex-col py-1 px-2">
    <!-- parte superios de titulo y busqueda -->
    <div class="w-full flex items-center justify-start py-1 gap-4">
      <h3 class="text-3xl font-semibold text-zinc-800">Productos</h3>
      <SearchComponent />
    </div>
    <!-- seccion de filtros -->
    <div class="w-full flex justify-between pt-2">
      <FiltersComponent /> <OrdenarComponent />
    </div>
    <!-- seccion de productos -->
    <div class="w-full h-auto grid grid-cols-3 py-4">
      <div class="flex items-center justify-center">
        <NuxtLink to="/admin/productos/agregar"
          ><AdminCartAdd :title="CardAddTitle"
        /></NuxtLink>
      </div>

      <div
        class="flex items-center justify-center"
        v-for="product in productosPage?.content"
      >
        <ProductCardPrimary
          :product="product"
          :is-admin="true"
          :category-name="''"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Page } from "~/services/common/models/Page";
import type { ProductWithVariants } from "~/services/Product/domain/models/ProductWithVariants";

definePageMeta({
  layout: "admin",
});
const CardAddTitle: string = "Producto";
//product store
const productosPage = ref<Page<ProductWithVariants> | null>(null);
const { findWithVariantsWithFilterAndPagination } = useProductt();
onMounted(async () => {
  productosPage.value = await findWithVariantsWithFilterAndPagination(0, 20, 1);
});
</script>
