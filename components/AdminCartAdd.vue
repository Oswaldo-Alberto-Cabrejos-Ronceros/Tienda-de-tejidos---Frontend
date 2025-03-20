<template>
<div class="h-auto w-72 flex flex-col text-zinc-800 transition-all duration-150 border-solid border-1 gap-1 items-center rounded-t-lg border-zinc-800 hover:text-pink-500 ">
  <!-- icono -->
   <div class="w-full h-[288px] flex items-center justify-center"><FontAwesomeIcon class="text-9xl" :icon="faCirclePlus"/></div>
   <!-- titulo -->
<p class="text-xl">Agregar</p>
<p class="text-xl">{{title}}</p>
</div>
</template>

<script lang="ts" setup>
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
defineProps<{
  title:string
}>()
</script>
