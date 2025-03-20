<template>
  <div class="flex items-center justify-center text-zinc-800 flex-col gap-2">
    <FontAwesomeIcon :icon="icon" class="text-7xl"/>
    <p class="text-xl">{{ name }}</p>
    <p class="text-base">{{ description }}</p>
  </div>
</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

defineProps<{
name:string,
icon:any,
description:string
}>()
</script>

<style>

</style>