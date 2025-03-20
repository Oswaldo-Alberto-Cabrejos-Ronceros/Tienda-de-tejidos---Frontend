<template>
  <div class="w-full flex flex-col gap-3 pb-5 text-neutral-50 text-base border-solid border-neutral-50 border-b">
    <NuxtLink v-for="item in items" :to="item.rute" @click="emitirCerrar()"><p >{{ item.title }}</p></NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue';
const items: { title: string; rute: string }[] = [
  { title: "Amigurumi", rute: "/productos/Amigurumi" },
  { title: "Prendas", rute: "/productos/Prendas" },
  { title: "Accesorios", rute: "/productos/Accesorios" },
  { title: "Joyas", rute: "/productos/Joyas" },
  { title: "Regalos", rute: "/productos/Regalos" },
  { title: "Contactanos", rute: "/contacto" },
];
const emit=defineEmits(["cerrar"]);
const emitirCerrar=()=>{
  emit("cerrar");
}
</script>

<style>

</style>