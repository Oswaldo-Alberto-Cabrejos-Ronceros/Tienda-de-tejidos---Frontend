<template>
  <header class="w-full h-auto flex items-center justify-center p-2 flex-col">
    <div
      class="h-auto w-[90%] flex items-center justify-center flex-row border-solid border-neutral-700 border-b py-3"
    >
      <IconPrimary @click.stop="handleBarVertical()" :icono="faSearch" />

      <!-- referencia para el evento de cerrar menu al clickear fuera -->
      <div
        ref="barNavVerticalRef"
        class="fixed top-0 left-0 h-screen w-auto z-50"
      >
        <transition name="slide" @after-leave="afterLeave">
          <MenuVertical v-if="showBarVetical" @cerrar="closeBarVetical" />
        </transition>
      </div>

      <div class="flex-1 flex items-center justify-center">
        <NuxtLink to="/">
          <h2 class="text-4xl text-pink-400 font-daydream">Artis</h2>
        </NuxtLink>
      </div>
      <div class="flex gap-1">
        <!-- si es admin -->
        <NuxtLink v-if="isAdmin" to="/admin/">
          <div class="h-auto w-32">
            <ButtonSecondary :title="buttonAdminTitle" />
          </div>
        </NuxtLink>
        <NuxtLink v-for="icon of iconos" :to="icon.rute"
          ><IconPrimary :icono="icon.icon"
        /></NuxtLink>
        <!-- boton para cerrar sesion -->
        <IconPrimary
          v-if="userStore.isAuthenticated"
          :icono="iconoLogout.icon"
          @click="iconoLogout.onClick"
        />
      </div>
    </div>
    <BarNav class="hidden sm:flex" />
  </header>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import { NuxtLink } from "#components";
import {
  faSearch,
  faCircleUser,
  faShoppingBag,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
//logica para saber si hay un usuario autenticado
const userStore = useUserStore();
//authStore
const authStore = useAuthStore();
onMounted(async () => {
  userStore.loadFromSession();
  //para saber si es admin o no
  if (userStore.isAuthenticated) {
    authStore.recoverIsAdmin();
    if (authStore.isAdmin == null) {
      await authStore.setIsAdmin();
    }
  }
});

const userUrl = computed(() =>
  userStore.isAuthenticated ? "/user/profile" : "/auth/login"
);

//boolean para saber si es admin
const isAdmin = asyncComputed(async () => {
  if (userStore.isAuthenticated) {
    authStore.recoverIsAdmin();
    if (authStore.isAdmin == null) {
      await authStore.setIsAdmin();
    }
    return authStore.isAdmin;
  }
});
const iconos = computed(() => [
  { icon: faCircleUser, rute: userUrl.value },
  // { icon: faShoppingBag, rute: "/cart" },
]);

//agregar funcion de modal
//emit
const emit = defineEmits(["logOut"]);

const handleLogout = () => {
  emit("logOut");
};

//icono de logout
const iconoLogout = {
  icon: faRightFromBracket,
  onClick: handleLogout,
};
const showBarVetical = ref(false);
const barNavVerticalRef = ref<HTMLElement | null>(null);

const handleBarVertical = () => {
  showBarVetical.value = true;
};

// cerrar menu al clickear fuera del menu
const handleOutsideClick = (event: MouseEvent) => {
  if (
    showBarVetical.value && //ejecutar solo si el menu esta visible
    barNavVerticalRef.value && //ejecutar solo si existe la referencia
    !barNavVerticalRef.value.contains(event.target as Node)
  ) {
    closeBarVetical();
  }
};

// agregar y eliminar eventlistener al montaje y desmontaje
onMounted(() => {
  document.addEventListener("click", handleOutsideClick);
});
onUnmounted(() => {
  document.removeEventListener("click", handleOutsideClick);
});

const closeBarVetical = () => {
  showBarVetical.value = false;
};

// funcion para ejecutar despues de cerrar barra
const afterLeave = () => {};
//title button admin
const buttonAdminTitle: string = "Admin";
</script>

<style scoped>
/* animacion para la barra definida en transition */
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
