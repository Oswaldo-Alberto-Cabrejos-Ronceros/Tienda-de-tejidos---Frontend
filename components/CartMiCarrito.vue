<template>
  <div class="flex w-full flex-col">
    <p class="text-xl font-semibold text-zinc-800">Mi Carrito de Compras</p>
    <div class="flex w-full gap-4 lg:gap-6 flex-col lg:flex-row">
      <!-- seccion productos -->
      <div class="w-auto min-w-3/5">
        <!-- Productos -->
        <ProductCartCard v-for="product in props.products" :product="product.product" :quantity="product.quantity" @eliminar="emitirEliminar(product.product.id)" @actualizar-cantidad="emitirActualizarCantidad"/>
        <!-- carta de costo de envio -->
<CartInfoCostoEnvio/>
      </div>
      <!-- seccion resumen de compra -->
      <div class="flex-1 min-w-fit">
        <CartResumenCompra :products="props.products" :cost-total="props.costTotal"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Producto } from '~/interfaces/Producto';
const props=defineProps<{
  products:{product:Producto,quantity:number}[],
  costTotal:number
}>()
//emitir evento eliminar
const emit=defineEmits(["eliminar","actualizarCantidad"]);
const emitirEliminar=(productId:number)=>{
  emit("eliminar",productId);
};

const emitirActualizarCantidad= (payload:{idProduct:number,quantity:number})=>{
  emit("actualizarCantidad",payload)
  console.log("emitido desde cartmicarrito", payload)
};
</script>

<style>

</style>