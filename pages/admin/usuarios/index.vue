<template>
  <div class="w-full h-auto flex flex-col py-1 px-2 max-w-full">
    <h3 class="text-2xl font-semibold py-1 text-zinc-800">Usuario</h3>
    <div class="w-full flex max-w-full overflow-hidden">
      <TablePrimary :titles="titlesTable" :data="users"></TablePrimary>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { User } from "~/services/User/domain/models/User";

definePageMeta({
  layout: "admin",
});

onMounted(async () => {
  const { findAll } = useUser();
  users.value = await findAll();
});

const users = ref<User[]>([]);

const titlesTable: string[] = [
  "N°",
  "Nombre",
  "Apellidos",
  "Email",
  "T-Documento",
  "Número Documento",
  "Celular",
  "F-Registro",
  "Rol",
];
</script>
