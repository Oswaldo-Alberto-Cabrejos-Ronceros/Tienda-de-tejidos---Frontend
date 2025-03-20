<template>
  <NuxtLink class="w-full h-full min-w-48 max-h-72 justify-center items-end transition-all duration-300 hover:opacity-80" :to="rute">
   <div
      class="flex relative w-full h-full justify-center items-end"
    >
      <img class="w-full h-full object-cover" :src="image" :alt="name" />
      <h2
        class="text-4xl absolute z-30 text-neutral-50 font-bold text-stroke-neutral"
      >
        {{ name }}
      </h2>
    </div></NuxtLink>
  
</template>

<script lang="ts" setup>
defineProps<{
  image: string;
  name: string;
  rute: string;
}>();
</script>

<style></style>
