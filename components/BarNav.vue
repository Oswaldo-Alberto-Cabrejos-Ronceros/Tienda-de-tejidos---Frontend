<template>
  <nav class="w-screen flex items-center justify-center">
    <div
      class="w-[90%] grid grid-cols-6 grid-rows-1 border-solid border-neutral-700 border-b"
    >
      <BarNavItem v-for="item of items" :title="item.title" :rute="item.rute" />
    </div>
  </nav>
</template>

<script lang="ts" setup>
const items: { title: string; rute: string }[] = [
  { title: "Amigurumi", rute: "/productos/Amigurumi" },
  { title: "Prendas", rute: "/productos/Prendas" },
  { title: "Accesorios", rute: "/productos/Accesorios" },
  { title: "Joyas", rute: "/productos/Joyas" },
  { title: "Regalos", rute: "/productos/Regalos" },
  { title: "Contactanos", rute: "/contacto" },
];
</script>
