<template>
  <div class="w-full flex min-h-64 lg:min-h-full h-auto flex-col text-zinc-800 text-base">
    <p class="font-semibold w-full border-solid border-neutral-700 border-b pb-4">Productos</p>
    <ul class="h-auto flex-1 flex flex-col py-1 gap-0.5">
      <li v-for="product in props.products" class="flex justify-between">
        <p>{{ `${product.product.name} (${product.quantity})` }}</p>
        <p>{{ `S/ ${product.product.price*product.quantity}` }}</p>
      </li>
    </ul>
    <div class="font-semibold w-full flex justify-between border-solid border-neutral-700 border-t py-4"><p >Total (sin envio):</p><p >{{`S/ ${costTotal}`}}</p></div>
    <ButtonPrimary :title="buttonTitle"/>
  </div>
</template>

<script lang="ts" setup>
import type { Producto } from '~/interfaces/Producto';

const props=defineProps<{
  products:{product:Producto,quantity:number}[];
  costTotal:number
}>();
const buttonTitle:string="Comprar";
</script>
