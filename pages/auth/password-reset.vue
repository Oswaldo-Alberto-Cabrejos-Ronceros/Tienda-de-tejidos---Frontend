<template>
  <form
    class="flex flex-1 flex-col w-[40vw] min-w-56 max-w-96 text-zinc-800 justify-center items-center gap-4 justify-self-center"
  >
    <h3 class="text-3xl font-semibold">Restablecer Contraseña</h3>
    <p class="text-base self-start">Ingrese el correo con el que se registro</p>
    <InputPrimary
      :name="input.name"
      :type="input.type"
      :icon="input.icon"
      :placeholder="input.placeholder"
      v-model="email"
    />
    <ButtonPrimary :title="buttonTitle" />
  </form>
</template>

<script lang="ts" setup>
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const input:{name:string,type:string,icon:any,placeholder:string}={
name:"email",
type:"email",
icon:faEnvelope,
placeholder:"Ingrese correo electrónico"
}
const buttonTitle:string="Enviar código"
//referencia para v-model
const email=ref("");
</script>

<style>

</style>