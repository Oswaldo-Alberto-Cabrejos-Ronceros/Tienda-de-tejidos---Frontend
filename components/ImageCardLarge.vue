<template>
  <div  class="flex w-full items-center justify-center">
    <img class="w-full object-cover max-h-[80vh]" :src="props.image" :alt="props.name">
  </div>
</template>

<script lang="ts" setup>
const props=defineProps<{
  name:string,
  image:string
}>()
</script>
