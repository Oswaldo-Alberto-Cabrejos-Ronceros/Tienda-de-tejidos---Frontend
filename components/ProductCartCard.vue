<template>
  <div class="w-full sm:min-w-xl sm:h-44 flex flex-col sm:flex-row py-2 pr-2 gap-4 relative border-solid border-neutral-700 border-b">
    <!-- imagen -->
    <img
      class="w-full self-center sm:w-[30%] h-full max-w-72 object-cover"
      :src="props.product.images[0]"
      :alt="props.product.name"
    />
    <!-- seccion derecha de informacion -->
    <div
      class="h-full flex-1 flex text-base text-zinc-800 gap-4 justify-between flex-col"
    >
      <div class="flex justify-between flex-col sm:flex-row">
        <div class="flex flex-col sm:flex-row flex-1 gap-4">
          <div class="sm:w-[40%] min-w-fit self-center sm:self-start"><p>{{ props.product.name }}</p></div>
          
          <div>
            <SelectComponent
              :name="cantidadSelect.name"
              :options="cantidadSelect.options"
              v-model="quantityModel"
            />
          </div>
        </div>
        <div class="min-w-12 flex justify-end pt-4 sm:pt-0"><p class="font-semibold">{{ `S/ ${props.product.price}` }}</p></div>
        
      </div>
      <div class="flex justify-end absolute top-2 right-2 sm:static">
        <!-- boton eliminar -->
        <IconPrimary
          :icono="iconDelete.icon"
          :color="iconDelete.color"
          :color-hover="iconDelete.colorHover"
          @click="emitirEliminar()"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Producto } from "~/interfaces/Producto";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { defineEmits } from "vue";
import { ref,watch } from "vue";
const props = defineProps<{
  product: Producto;
  quantity: number;
}>();
//select cantidad
const cantidadSelect: {
  name: string;
  options: { value: string | number; label: string }[];
} = {
  name: "cantidad",
  options: [
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 1,
      label: "1",
    },
  ],
};
//icono delete
const iconDelete: { icon: any; color: string; colorHover: string } = {
  icon: faTrash,
  color: "red-400",
  colorHover: "red-500",
};
//emitir evento para eliminar
const emit=defineEmits(["eliminar","actualizarCantidad"]);
const emitirEliminar=()=>{
  emit("eliminar")
};
//para quantity
const quantityModel=ref(props.quantity);

//escuchar cambios en quantityModel y emitir evento
watch(quantityModel, (newQuantity)=>{
  emit("actualizarCantidad",{idProduct: props.product.id,quantity:newQuantity})
  console.log("Emitido desde productCardCart",props.product.id,newQuantity)
})
</script>


