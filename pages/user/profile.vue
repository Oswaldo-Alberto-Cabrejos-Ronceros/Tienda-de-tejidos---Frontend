<template>
  <div class="flex flex-col text-zinc-800 w-[90%] gap-2 pt-2">
    <div v-if="usuario" class="flex gap-2">
      <h3 class="text-3xl font-semibold">
        {{ `${usuario.name} ${usuario.lastname}` }}
      </h3>
      <IconPrimary
        v-for="icon in iconsCrud"
        :icono="icon.icon"
        :color="icon.color"
        :color-hover="icon.colorHover"
      />
    </div>
    <p v-else>Cargando...</p>
    <p class="text-xl font-semibold">Información</p>
    <div
      v-if="usuario"
      v-for="infoKey in infoKeys"
      class="flex items-center gap-2"
    >
      <p class="text-xl">{{ `${infoKey.title}:` }}</p>
      <p class="text-base">{{ usuario[infoKey.clave] }}</p>
    </div>
    <p v-else>Cargando...</p>
  </div>
</template>

<script lang="ts" setup>
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import type { User } from "~/services/User/domain/models/User";
import { useUser } from "~/composables/useUser";
import { useAuthentication } from "~/composables/useAuthentication";

const { findById } = useUser();

const { getUserId } = useAuthentication();

//llamamos al meotod de cargar desde sesion al montar el componente
onMounted(async () => {
  const id = getUserId();
  usuario.value = await findById(id);
});
const usuario = ref<User | null>(null);
//key para iterar informacion
const infoKeys: { clave: keyof User; title: string }[] = [
  { clave: "name", title: "Nombres" },
  { clave: "lastname", title: "Apellidos" },
  { clave: "phone", title: "Celular" },
];
//informacion de icons crud
const iconsCrud: { icon: any; color: string; colorHover: string }[] = [
  {
    icon: faTrash,
    color: "red-400",
    colorHover: "red-500",
  },
  {
    icon: faPen,
    color: "blue-400",
    colorHover: "blue-500",
  },
];
//para ultimas compras
//por mientras simulamos vacio , depues se hara llamada a api
const ultimasCompras = [];
</script>
