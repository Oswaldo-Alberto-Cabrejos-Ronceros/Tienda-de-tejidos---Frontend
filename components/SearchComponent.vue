<template>
  <div class="flex items-center justify-center border-solid border-1 rounded-sm border-gray-400 py-0.5 pl-3 pr-2 text-base text-zinc-800 bg-neutral-50 ">
    <input type="text" required name="search" placeholder="Buscar un Producto" class="focus:outline-none flex-1"> <button>
<IconPrimary :icono="faMagnifyingGlass"/>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
</script>
