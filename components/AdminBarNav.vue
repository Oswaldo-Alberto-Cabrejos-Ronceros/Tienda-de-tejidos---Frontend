<template>
  <div class="h-screen min-w-64 w-auto bg-pink-400 flex flex-col items-center">
    <!-- titulo -->
    <h2 class="text-4xl text-neutral-50 font-daydream px-6 py-3" >
      Artis
    </h2>
    <!-- barnav -->
     <nav class="flex flex-col">
      <AdminBarNavItem v-for="item in items" :icon="item.icon" :title="item.title" :rute="item.rute"/>
     </nav>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  items:{icon:any,title:string,rute:string}[]
}>()
</script>
