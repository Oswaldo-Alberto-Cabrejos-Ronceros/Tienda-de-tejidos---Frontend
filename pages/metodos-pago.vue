<template>
  <div class="w-[90%] flex flex-col text-zinc-800 py-4">
    <h3 class="text-2xl font-semibold">Métodos de Pago</h3> 
    <div class="w-full flex flex-col sm:flex-row items-center justify-center gap-6 py-6">
      <div v-for="metodo in metodosPago" class="flex items-center justify-center flex-col gap-3">
<IconCardSvg :icono="metodo.icono" :size="metodo.size" :color-bg="metodo.colorBg" :color-hover="metodo.colorHover"/>
        <p class="text-xl">{{ metodo.title }}</p>
</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import YapeIcon from '~/assets/iconos/yape.svg'
import MercadoPagoIcon from '~/assets/iconos/mercado-pago.svg'
const metodosPago:{icono:any,colorBg:string,colorHover:string,size:string,title:string}[]=[
{
icono:MercadoPagoIcon,
colorBg:"sky-500",
colorHover:"sky-600",
size:"48",
title:"Mercado Pago"
},{
  icono:YapeIcon,
  colorBg:"violet-600",
  colorHover:"violet-700",
  size:"64",
  title:"Yape"
}
]
</script>

<style>

</style>