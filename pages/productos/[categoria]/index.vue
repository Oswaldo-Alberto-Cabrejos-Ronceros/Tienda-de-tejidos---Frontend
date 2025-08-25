<template>
  <div class="w-full flex flex-col items-center justify-center py-1 pb-4">
    <h3 class="text-2xl font-semibold mb-2">{{ categoria }}</h3>
    <div class="text-zinc-800 w-[90%] flex flex-col gap-6">
      <!--       <div class="w-full flex justify-between pt-1">
        <FiltersComponent/><OrdenarComponent />
      </div> -->

      <div
        class="w-full grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-y-2"
      >
        <div
          v-for="producto in productosPage?.content"
          class="flex items-center justify-center"
        >
          <ProductCardPrimary :product="producto" :category-name="categoria" />
        </div>
      </div>
      <Paginator v-if="productosPage && productosPage.content.length > 0"
        :total-items="productosPage.page"
        :items-per-page="5"
        v-model:current-page="page"
      ></Paginator>
    </div>
    <h3 v-if="productosPage?.content.length===0" class="text-xl m-4">No hay productos</h3>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { useProductt } from "~/composables/useProductt";
import type { Page } from "~/services/common/models/Page";
import type { ProductWithVariants } from "~/services/Product/domain/models/ProductWithVariants";
//obtenemos la categoria de la ruta
const route = useRoute();
const categoria = route.params.categoria as string;
const productosPage = ref<Page<ProductWithVariants> | null>(null);

//obtenemos la funcion que busca nombre de la categoria por id
const { findByName } = useCategory();
const categoryId = findByName(categoria as string);
//productos de categoria--despues implementar solicitud api por store Producto
const { findWithVariantsWithFilterAndPagination } = useProductt();
const page = ref(1);
onMounted(async () => {
  loadPage(page.value);
});

const loadPage = async (newPage: number) => {
  page.value = newPage;
  productosPage.value = await findWithVariantsWithFilterAndPagination(
    page.value,
    20,
    categoryId
  );
};
</script>
