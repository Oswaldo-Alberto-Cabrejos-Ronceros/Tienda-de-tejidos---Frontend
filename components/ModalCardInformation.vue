<template>
  <div class=" w-96 h-[496px] bg-neutral-50 flex flex-col gap-6 p-6 items-center justify-center rounded-lg shadow-xl text-xl text-zinc-800">
    <div class="flex-1"><img class="w-full h-full object-cover" :src="image" :alt="name"></div>
    
    <p>{{ mensaje }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  image:string,
  name:string,
  mensaje:string
}>()
</script>

<style>

</style>