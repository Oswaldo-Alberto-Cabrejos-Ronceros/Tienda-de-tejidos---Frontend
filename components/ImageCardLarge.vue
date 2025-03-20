<template>
  <div  class="flex w-full">
    <img class="w-full object-cover" :src="props.image" :alt="props.name">
  </div>
</template>

<script lang="ts" setup>
const props=defineProps<{
  name:string,
  image:string
}>()
</script>
