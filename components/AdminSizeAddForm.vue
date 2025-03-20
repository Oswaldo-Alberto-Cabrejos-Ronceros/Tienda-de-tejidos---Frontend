<template>
<form @submit.prevent="sendForm" class="w-auto h-auto flex flex-col gap-4 items-center justify-center p-4 rounded-sm border-solid border-1 border-zinc-800 bg-neutral-50 shadow-md">
    <!-- titulo -->
    <h3 class="text-2xl font-semibold text-zinc-800">Agregar Talla</h3>
  <div class="w-lg flex items-center justify-center">
    <InputPrimary :icon="inputData.icon" :placeholder="inputData.placeholder" :type="inputData.type" :name="inputData.name" v-model="formAddSize[inputData.name] as keyof Size
    "/>
  </div>
  <ButtonPrimary :title="buttonAddTitle"/>
</form>
</template>

<script lang="ts" setup>
//importamos icono
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';
import type { Size } from '~/interfaces/Producto';
//formulario
const formAddSize= reactive<Size>({
  name:""
})
//data del input
const inputData:{icon:any, placeholder:string,type:string,name:keyof Size}={
  icon:faUpRightAndDownLeftFromCenter,
  placeholder:"Ingrese nombre",
  type:"text",
  name:"name"
};
const buttonAddTitle:string="Agregar"
//definimos emit
const emit = defineEmits(["send-element"]);
const sendForm=()=>{
  emit('send-element',formAddSize);
  console.log("desde form",formAddSize)
}
</script>