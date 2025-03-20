<template>
  <div class="w-screen min-h-56 bg-pink-400 flex justify-center">
    <div class="flex min-h-full w-[95%]">
      <div class="w-[60%] min-h-full flex flex-col p-4 justify-between">
        <div class="flex flex-col gap-1">
          <p class="text-2xl font-daydream text-neutral-50">Suscribete</p>
          <form class=" sm:w-sm md:w-md flex flex-col sm:flex-row gap-2 sm:gap-0.5">
            <div class="w-full sm:w-[80%]">
              <InputSecondary
                name="correo"
                type="text"
                placeholder="Ingrese correo"
                v-model="email"
              />
            </div>
            <div class="w-28">
              <ButtonPrimary
                title="Suscribirse"
                color-text="zinc-800"
                color-bg="lime-300"
                color-hover="lime-400"
              />
            </div>
          </form>
        </div>

        <div class="flex flex-col sm:flex-row sm:items-center p-1 gap-1">
          <p class="text-base text-neutral-50">Siguenos en</p>
          <div class="flex items-center gap-1">
            <a
            v-for="icon of iconosRedesSociales"
            :href="icon.rute"
            target="_blank"
          >
            <IconPrimary
              :icono="icon.icon"
              color="neutral-50"
              color-hover="lime-500"
          /></a>
          </div>
         
        </div>
        <p class="text-base text-neutral-50">
          2025 Artis Todos los derechos reservados
        </p>
      </div>
      <div
        class="w-[40%] min-h-full flex flex-col text-neutral-50 p-4 justify-center items-end gap-1"
      >
        <div class="flex flex-col gap-1">
          <p class="text-xl border-solid border-neutral-50 border-b w-min">
            Informacion
          </p>
          <NuxtLink
            v-for="item of informacionItemts"
            :to="item.rute"
            class="transition-all duration-150 hover:text-lime-400"
            ><p class="text-base">{{ item.name }}</p></NuxtLink
          >
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
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
const informacionItemts: { name: string; rute: string }[] = [
  { name: "Sobre Nosotros", rute: "/nosotros" },
  { name: "Términos y condiciones", rute: "/terminos" },
  { name: "Preguntas Frecuentes", rute: "/preguntas" },
  { name: "Métodos de pago", rute: "metodos-pago" },
  { name: "Contacto", rute: "contacto" },
];
//varible del v-model
const email=ref("");

</script>
