<template>
  <div class="w-full h-16 px-3 flex items-center justify-end gap-3 shadow-md">
    <NuxtLink to="/admin/profile"
      ><AdminPerfilCard
        :name="usuarioPerfil.name"
        :lastname="usuarioPerfil.lastname"
        :url-image="usuarioPerfil.urlImage" />
</NuxtLink>
<IconPrimary @click="handelOut" :icono="faRightFromBracket"
/>
  </div>
</template>

<script lang="ts" setup>
//simulacion de informacion basica de perfil
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
const usuarioPerfil = {
  name: "Oswaldo",
  lastname: "Cabrejos",
  urlImage:
    "https://i0.wp.com/lamiradafotografia.es/wp-content/uploads/2014/07/foto-perfil-psicologo-180x180.jpg?resize=180%2C180",
};
//emit
const emit=defineEmits(["showOut"]);
const handelOut=()=>{
  emit('showOut');
}
</script>
