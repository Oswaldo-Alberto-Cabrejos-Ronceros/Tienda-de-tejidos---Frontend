<template>
  <div class="flex w-full flex-col gap-4">
    <p class="text-xl font-semibold text-zinc-800">Datos de envio</p>
    <div
      v-for="select in datosEnvioSelect"
      class="flex justify-between text-base w-fit items-center"
    >
      <label class="w-96" :for="select.name">{{ select.label }}</label>
      <div class="w-40">
        <SelectComponent :name="select.name" :options="select.options" v-model="select.model"/>
      </div>
    </div>
    <div class="flex justify-between text-base w-fit items-center">
      <label class="w-96" :for="inputDireccion.name">{{
        inputDireccion.label
      }}</label>
      <div class="flex gap-4">
        <div>
          <InputPrimary
            :name="inputDireccion.name"
            :placeholder="inputDireccion.placeholder"
            :type="inputDireccion.type"
            :icon="inputDireccion.icon"
            :color-border="inputDireccion.colorBorder"
            v-model="inputDireccion.model"
          />
        </div>
        <div class="h-auto w-36">
          <ButtonPrimary :title="titleButtonCalEnvio" />
        </div>
      </div>
    </div>
    <div class="flex justify-between text-base w-fit items-center font-semibold">
<p class="w-96">Costo de envio</p><p>{{ `S/ ${costoEnvio}` }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { faHouse } from "@fortawesome/free-solid-svg-icons";
//reactive form
const formEnvio=reactive({
  departamento:"",
  provincia:"",
  distrito:"",
  direccion:""
}
)
const datosEnvioSelect: {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  model:any
}[] = [
  {
    label: "Seleccione un Departamento",
    name: "Departamento",
    options: [
      {
        value: "DEPARTAMENTO",
        label: "Departamento",
      },
      {
        value: "ICA",
        label: "Ica",
      },
      {
        value: "Lima",
        label: "Lima",
      },
    ],
    model:formEnvio.departamento
  },
  {
    label: "Seleccione una Provincia",
    name: "Provincia",
    options: [
      {
        value: "PROVINCIA",
        label: "Provincia",
      },
      {
        value: "ICA",
        label: "Ica",
      },
      {
        value: "Lima",
        label: "Lima",
      },
    ],
    model:formEnvio.provincia
  },
  {
    label: "Seleccione un Distrito",
    name: "Distrito",
    options: [
      {
        value: "DISTRITO",
        label: "Distrito",
      },
      {
        value: "ICA",
        label: "Ica",
      },
      {
        value: "Lima",
        label: "Lima",
      },
    ],
    model:formEnvio.distrito
  },
];
const inputDireccion: {
  label: string;
  name: string;
  type: string;
  icon: any;
  placeholder: string;
  colorBorder:string;
  model:any
} = {
  label: "Ingrese dirección",
  name: "Direccion",
  type: "text",
  icon: faHouse,
  placeholder: "Ingrese Dirección",
  colorBorder:"gray-400",
  model:formEnvio.direccion
};
const titleButtonCalEnvio: string = "Calcular Envio";
//simulacion de costo de envio
const costoEnvio:number=15;
</script>

<style></style>
