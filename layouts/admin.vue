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
  <div class="w-full h-auto min-h-screen flex flex-row p-0 m-0 bg-neutral-50">
    <!-- menu -->
    <AdminBarNav class="hidden lg:flex" :items="items" />

    <!-- barra vertical móvil -->
    <div
      ref="barNavVerticalRef"
      class="fixed top-0 left-0 h-screen w-auto z-50"
      @click.stop
     
    >
      <transition name="slide" @after-leave="afterLeave">
        <AdminBarNav @close-menu="closeBarVetical"  v-if="showBarVetical" :items="items" />
      </transition>
    </div>

    <!-- principal -->
    <div class="h-auto min-h-full flex-1 flex flex-col">
      <!-- header -->
      <AdminHeader
        @handle-menu="handleBarVertical"
        @show-out="handleModalConfirmOut"
      />

      <!-- contenido -->
      <div
        class="h-auto flex-1 flex flex-col items-center py-1 px-2 max-w-full"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { faTag, faUser, faSwatchbook } from "@fortawesome/free-solid-svg-icons";
import CardConfirm from "~/components/CardConfirm.vue";

// título de la página
useHead({ title: "Artis" });

// items del menú
const items = [
  { icon: faTag, title: "Productos", rute: "/productos" },
  { icon: faUser, title: "Usuarios", rute: "/usuarios" },
  { icon: faSwatchbook, title: "Tallas y colores", rute: "/tallas-colores" },
];

// mensaje modal salir
const message = { message: `¿Seguro que quieres salir del dashboard admin?` };
const showModalConfirmOut = ref(false);
const handleModalConfirmOut = () => {
  showModalConfirmOut.value = !showModalConfirmOut.value;
};
const handleOut = (flag: any) => {
  flag ? navigateTo("/") : handleModalConfirmOut();
};

// barra vertical
const showBarVetical = ref(false);
const barNavVerticalRef = ref<HTMLElement | null>(null);

const handleBarVertical = (event?: MouseEvent) => {
  event?.stopPropagation(); // evita que se cierre por el click fuera
  showBarVetical.value = true;
  console.log("abriendo menú vertical");
};
const closeBarVetical = () => {
  showBarVetical.value = false;
};

// cerrar menú al clickear fuera
const handleOutsideClick = (event: MouseEvent) => {
  if (
    showBarVetical.value &&
    barNavVerticalRef.value &&
    !barNavVerticalRef.value.contains(event.target as Node)
  ) {
    closeBarVetical();
  }
};

watch(showBarVetical, (visible) => {
  if (visible) {
    setTimeout(() => {
      document.addEventListener("click", handleOutsideClick);
    }, 0);
  } else {
    document.removeEventListener("click", handleOutsideClick);
  }
});

// animación terminada
const afterLeave = () => {};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}
.slide-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
