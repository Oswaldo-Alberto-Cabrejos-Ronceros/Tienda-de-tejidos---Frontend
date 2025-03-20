<template>
  <NuxtLink :to="rute">
    <div
      class="flex items-center justify-center text-zinc-800 p-1 transition-all duration-150 py-3 hover:text-pink-400"
    >
      <p class="text-base">{{ title }}</p>
    </div></NuxtLink
  >
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  rute: string;
}>();
</script>
