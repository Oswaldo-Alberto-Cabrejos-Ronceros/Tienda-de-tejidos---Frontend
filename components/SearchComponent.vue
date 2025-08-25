<template>
  <form @submit.prevent="emitSearch"
    class="flex items-center justify-center border-solid border-1 rounded-sm border-gray-400 py-0.5 pl-3 pr-2 text-base text-zinc-800 bg-neutral-50"
  >
    <input
      type="text"
      required
      name="search"
      placeholder="Buscar un Producto"
      class="focus:outline-none flex-1"
      v-model="value"
    />
    <button type="submit">
      <IconPrimary :icono="faMagnifyingGlass" />
    </button>
  </form>
</template>

<script lang="ts" setup>
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
//for value
const value = ref("");
//for emit value
const emit = defineEmits(["search"]);
const emitSearch = () => {
  emit("search", value.value);
  console.log("Search value emitted:", value.value);
};
</script>
