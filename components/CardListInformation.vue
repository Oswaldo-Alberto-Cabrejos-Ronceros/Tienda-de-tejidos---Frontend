<template>
  <div class="w-full flex flex-col text-zinc-800 gap-4">
    <h3 class="text-2xl font-semibold">{{ title }}</h3>
    <div v-for="information in content" class="flex flex-col">
      <p class="text-xl">{{ information.subtitle }}</p>
      <p class="text-base">{{ information.content }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  content: { subtitle: string; content: string }[];
}>();
</script>

<style></style>
