<template>
  <!-- modal -->
  <ModalGeneric
    :show-value="showModalConfirmOut"
    :component="CardConfirm"
    :props="message"
    @update:show-value="handleModalConfirmOut"
    @send-element="handleOut"
  />
  <!-- Todo -->
  <div class="w-screen h-auto min-h-screen flex flex-row p-0 m-0 bg-neutral-50">
    <!-- menu -->
    <AdminBarNav :items="items" />
    <!-- principal -->
    <div class="h-auto min-h-full flex-1 flex flex-col">
      <!-- header -->
      <AdminHeader @show-out="handleModalConfirmOut" />
      <!-- Slot de contenido principal -->
      <div class="h-auto flex-1 flex flex-col items-center py-1 px-2">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSwatchbook } from "@fortawesome/free-solid-svg-icons";
//importamos componente para modal generic
import CardConfirm from "~/components/CardConfirm.vue";
const items: { icon: any; title: string; rute: string }[] = [
  {
    icon: faHouse,
    title: "Inicio",
    rute: "",
  },
  {
    icon: faTag,
    title: "Productos",
    rute: "/productos",
  },
  /*  {
    icon:faBagShopping,
    title:"Ventas",
    rute:"/ventas"
  },
  {
    icon:faChartPie,
    title:"Reportes",
    rute:"/reportes"
  },*/

  {
    icon: faUser,
    title: "Usuarios",
    rute: "/usuarios",
  },
  {
    icon: faSwatchbook,
    title: "Tallas y colores",
    rute: "/tallas-colores",
  },
];
//mensaje para el componente del modal
const message = { message: `¿Seguro que quieres salir del dashboard admin?` };
//concerniente al modal de cerrar modo admin
const showModalConfirmOut = ref(false);
const handleModalConfirmOut = () => {
  showModalConfirmOut.value = !showModalConfirmOut.value;
};
const handleOut = (flag: any) => {
  flag ? navigateTo("/") : handleModalConfirmOut();
};
</script>
