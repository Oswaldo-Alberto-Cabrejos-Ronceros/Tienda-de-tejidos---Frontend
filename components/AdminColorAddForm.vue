<template>
  <form
    @submit.prevent="sendForm"
    class="w-auto h-auto flex flex-col gap-4 items-center justify-center p-4 rounded-sm border-solid border-1 border-zinc-800 bg-neutral-50 shadow-md"
  >
    <!-- titulo -->
    <h3 class="text-2xl font-semibold text-zinc-800">Agregar Color</h3>
    <div class="w-lg flex flex-col gap-2 items-center justify-center">
      <InputPrimary v-for="inputData in inputData"
        :icon="inputData.icon"
        :placeholder="inputData.placeholder"
        :type="inputData.type"
        :name="inputData.name"
        v-model="formAgregar[inputData.name] as keyof ColorRequest
      "
      />
    </div>
    <ButtonPrimary :title="buttonAddTitle" />
  </form>
</template>

<script lang="ts" setup>
//importamos icono
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import type { ColorRequest } from "~/services/Color/domain/models/ColorRequest";
//formulario
const formAgregar = reactive<ColorRequest>({
  name: "",
  hexCode: ""
});
//data input
const inputData: {
  icon: any;
  placeholder: string;
  type: string;
  name: keyof ColorRequest;
}[] = [{
  icon: faCircleHalfStroke,
  placeholder: "Ingrese nombre",
  type: "text",
  name: "name",
},{
  icon: faCircleHalfStroke,
  placeholder: "Ingrese código HEX",
  type: "color",
  name: "hexCode",
}];
const buttonAddTitle: string = "Agregar";
//definimos emit
const emit = defineEmits(["send-element"]);
//funcion que envia formulario por emit, para que el componente principal administre la peticion
const sendForm = () => {
  emit("send-element", formAgregar);
};
</script>
