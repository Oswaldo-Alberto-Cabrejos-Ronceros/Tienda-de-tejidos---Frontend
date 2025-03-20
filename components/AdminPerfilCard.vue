<template>
  <div class="flex w-auto h-full text-base text-neutral-800 transition-all items-center gap-3 duration-150 hover:text-pink-500">
    <p> {{ `${name} ${lastname}` }}</p>
    <AdminPerfilImage :url="urlImage"/>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
name:string,
lastname:string,
urlImage:string
}>()
</script>

<style>

</style>