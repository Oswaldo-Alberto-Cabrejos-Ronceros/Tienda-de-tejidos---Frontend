<template>
  <div class="flex flex-col bg-transparent items-center justify-center gap-2">
    <div class="flex items-center justify-center bg-neutral-800 w-12 h-12 rounded-full">
      <h3 class="text-2xl text-gray-400">{{ fase }}</h3>
    </div>
    <p>{{ title }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  fase:number,
  title:string
}>()
</script>

<style>

</style>