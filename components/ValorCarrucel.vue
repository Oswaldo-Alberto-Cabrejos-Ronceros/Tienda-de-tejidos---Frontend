<template>
  <div class="w-full h-auto gap-4 grid grid-cols-1 md:grid-cols-3 items-center justify-center">
    <ValorCard v-for="valor in valores" :name="valor.name" :icon="valor.icon" :description="valor.description"/>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
valores:{name:string, icon:any, description:string}[];
}>()
</script>
