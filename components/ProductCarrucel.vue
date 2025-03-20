<template>
  <div class="w-full h-auto flex flex-col">
    <!-- Carrusel de productos -->
    <div class="w-full overflow-hidden relative">
      <div
        class="flex gap-4 transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentPage * 100}%)` }"
      >
        <!-- Secciones del carrusel -->
        <div v-for="(chunk, index) in chunkedProducts" :key="index" class="min-w-full flex gap-4">
          <ProductCardSecondary v-for="(product, id) in chunk" :key="id" :product="product" />
        </div>
      </div>
    </div>

    <!-- Botones de navegación -->
    <div class="w-full p-2 flex items-center justify-center gap-2">
      <ButtonCarrucel v-for="n in quantityButtonsProducts" :key="n" @click="currentPage = n - 1"
        :class="{'bg-gray-500': currentPage === n - 1, 'bg-gray-300': currentPage !== n - 1}"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import type { Producto } from "~/interfaces/Producto";

// Props
const props = defineProps<{ products: Producto[] }>();

// Estado de la página actual
const currentPage = ref(0);

// Calcular cantidad de botones (número de páginas)
const quantityButtonsProducts = computed(() => Math.ceil(props.products.length / 5));

// Dividir los productos en grupos de 5
const chunkedProducts = computed(() => {
  const chunkSize = 5;
  return Array.from({ length: quantityButtonsProducts.value }, (_, i) =>
    props.products.slice(i * chunkSize, (i + 1) * chunkSize)
  );
});
</script>

<style scoped>
/* Transición suave en el carrusel */
.transition-transform {
  transition: transform 0.5s ease-in-out;
}
</style>