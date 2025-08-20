<template>
  <div class="w-[90%] flex flex-col text-zinc-800 py-4">
    <h3 class="text-2xl font-semibold">Contactanos</h3>
    <p class="text-xl">Para modelos personalizados o cualquier informacion</p>
    <div class="w-full flex flex-col md:flex-row items-center justify-center gap-12 py-6">
      <div class="flex flex-col items-center justify-center gap-3" v-for="contacto in contactos">
        <a :href="contacto.url" target="_blank">        <IconCardFA
          
          :icono="contacto.icon"
          :color-bg="contacto.colorBg"
          :color-hover="contacto.colorHover"
        /></a>

        <p class="text-xl">{{ contacto.title }}</p>
        <p class="text-xl">{{contacto.content}}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const contactos: {
  icon: any;
  title: string;
  content: string;
  colorBg: string;
  colorHover: string;
  url:string
}[] = [
  {
    icon: faPhoneFlip,
    title: "Celular",
    content: "902268600",
    colorBg: "pink-500",
    colorHover: "pink-600",
    url:"tel:+51902268600"
  },
  {
    icon: faEnvelope,
    title: "Correo",
    content: "artis@gmail.com",
    colorBg: "red-600",
    colorHover: "red-700",
    url:"mailto:artis@gmail.com"
  },
  {
    icon: faWhatsapp,
    title: "Whatsapp",
    content: "902268600",
    colorBg: "lime-400",
    colorHover: "lime-500",
    url:"https://wa.me/51902268600?text=Quiero%20informaci%C3%B3n%20sobre%20un%20producto"
  },
];
</script>
