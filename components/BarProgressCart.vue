<template>
  <div class="w-full h-32 flex items-center justify-center relative">
    <div class="w-[75%] h-1.5 rounded-2xl bg-gray-300 absolute top-12"></div>
    <div class="w-[80%] flex items-center justify-between bg-transparent absolute"><ButtonProgress v-for="fase in fasesCompra" :fase="fase.fase" :title="fase.title"/></div>
    
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue';
const emit = defineEmits([]);
const fasesCompra:{fase:number,title:string}[]=[
  {
fase:1,
title:"Productos"
  },
  {
fase:2,
title:"Datos de envio"
  },
  {
fase:3,
title:"Pago"
  }
]
</script>

<style>

</style>