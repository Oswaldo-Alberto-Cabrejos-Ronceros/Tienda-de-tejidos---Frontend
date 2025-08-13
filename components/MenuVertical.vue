<template>
  <div
    class="fixed h-screen w-full md:w-[30vw] min-w-sm flex flex-col bg-pink-400 top-0 left-0 z-40 items-start p-2 px-4 gap-2 text-neutral-50"
  >
    <div class="w-full flex justify-end">
      <IconPrimary
        @click="emitirCerrar()"
        :icono="icono.icono"
        :color-hover="icono.colorHover"
      ></IconPrimary>
    </div>
    <NuxtLink class="self-center" @click="emitirCerrar()" to="/"
      ><h1 class="text-5xl font-daydream">Artis</h1></NuxtLink
    >
    <div class="w-full"><SearchComponent /></div>
    <p class="text-2xl font-light font-daydream">Diseños frase frase</p>
    <BarNavVertical @cerrar="emitirCerrar()" />
    <NuxtLink
      v-if="!userStore.isAuthenticated"
      to="/auth/login"
      @click="emitirCerrar()"
      ><p class="text-base">Iniciar Sesión</p></NuxtLink
    >

    <p class="text-xs">Siguenos en nuestras redes sociales</p>
    <div class="flex items-center gap-1">
      <a v-for="icon of iconosRedesSociales" :href="icon.rute" target="_blank">
        <IconPrimary
          :icono="icon.icon"
          color="neutral-50"
          color-hover="lime-500"
      /></a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

const icono: { icono: any; colorHover: string } = {
  icono: faXmark,
  colorHover: "neutral-50",
};
//boolean para ver si el menu se esta cerrando
//evento para cerrar
const emit = defineEmits(["cerrar"]);
const emitirCerrar = () => {
  emit("cerrar");
  console.log("emitiendo cerrar");
};

//redes sociales
const iconosRedesSociales: { icon: any; rute: string }[] = [
  {
    icon: faInstagram,
    rute: "https://www.instagram.com/artistejidosyaccesorios?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    icon: faFacebook,
    rute: "https://www.facebook.com/people/Artis/100087073697210/?locale=es_LA",
  },
  {
    icon: faTiktok,
    rute: "https://www.tiktok.com/@artistejidosyaccesorios?is_from_webapp=1&sender_device=pc",
  },
];
//saber si el usuario esta autenticado
const userStore = useUserStore();
</script>
