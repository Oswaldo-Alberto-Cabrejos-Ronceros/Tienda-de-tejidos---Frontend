<template>
  <NuxtLink :to="`/admin${rute}`">
  <div class="w-full min-w-64 h-16 flex items-center text-neutral-50 transition-all duration-150 px-3 gap-3 hover:bg-pink-500">
    <div class="flex items-center justify-center text-xl"><FontAwesomeIcon :icon="icon"/></div>
    <p class="text-base">{{ title }}</p>
  </div>
</NuxtLink>
</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

defineProps<{
icon:any,
title:string,
rute:string
}>()
</script>

<style>

</style>