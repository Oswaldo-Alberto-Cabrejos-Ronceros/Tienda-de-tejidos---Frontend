<template>
  <div
    class="flex items-center justify-center relative text-neutral-50 text-stroke-neutral w-full h-min sm:h-[30vh] md:h-[28vh] lg:h-[25vh] "
  >
    <img
      class="w-full h-full object-cover"
      :src="image"
      alt="Imagen Agradeciento"
    />
    <div
      class="absolute w-[90%] flex flex-col items-center justify-center gap-3 p-2"
    >
      <h3 class=" font-extrabold">{{ title }}</h3>
      <p class="text-2xl font-extrabold">{{ content }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  image: string;
  title: string;
  content: string;
}>();
</script>

<style></style>
