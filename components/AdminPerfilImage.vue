<template>
  <div class="size-12 rounded-full">
    <img :src="url" alt="perfil" class="size-full object-cover rounded-full">
  </div>
</template>

<script lang="ts" setup>
defineProps<{
url:string
}>()
</script>

<style>

</style>