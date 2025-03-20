<template>
         <div class="flex w-full border-solid border-neutral-700 border-b py-3 justify-between items-center">
          <!-- seccion 1 con icono -->
           <div class="flex text-zinc-800 text-base gap-2 items-center">
            <p>Costo de envío</p>
            <IconPrimary :icono="faTruck" />
           </div>
           <!-- seccion 2 por calcular -->
           <div><p class="text-semibold">Por calcular</p></div>
         </div>
</template>

<script lang="ts" setup>
import { faTruck } from '@fortawesome/free-solid-svg-icons';
</script>

<style>

</style>