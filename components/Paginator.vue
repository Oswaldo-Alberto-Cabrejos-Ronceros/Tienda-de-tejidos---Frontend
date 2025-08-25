<template>
  <div class="flex items-center space-x-2 w-full justify-center">
    <!-- Botón anterior -->
    <button
      class="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
      :disabled="currentPage === 1"
      @click="goToPage(currentPage - 1)"
    >
      ‹
    </button>

    <!-- Números de página -->
    <button
      v-for="page in visiblePages"
      :key="page"
      class="px-3 py-1 rounded"
      :class="
        page === currentPage
          ? 'bg-pink-400 text-white'
          : 'bg-gray-200 hover:bg-gray-300'
      "
      @click="goToPage(page)"
    >
      {{ page }}
    </button>

    <!-- Botón siguiente -->
    <button
      class="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
      :disabled="currentPage === totalPages"
      @click="goToPage(currentPage + 1)"
    >
      ›
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  totalItems: { type: Number, required: true },
  itemsPerPage: { type: Number, default: 10 },
  currentPage: { type: Number, default: 1 },
  maxVisible: { type: Number, default: 5 },
});

const emit = defineEmits(["update:currentPage"]);

// total de páginas
const totalPages = computed(() =>
  Math.ceil(props.totalItems / props.itemsPerPage)
);

// páginas visibles en el paginator
const visiblePages = computed(() => {
  const half = Math.floor(props.maxVisible / 2);
  let start = Math.max(1, props.currentPage - half);
  let end = Math.min(totalPages.value, start + props.maxVisible - 1);

  if (end - start + 1 < props.maxVisible) {
    start = Math.max(1, end - props.maxVisible + 1);
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
});

// función para cambiar página
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    emit("update:currentPage", page);
  }
};
</script>
