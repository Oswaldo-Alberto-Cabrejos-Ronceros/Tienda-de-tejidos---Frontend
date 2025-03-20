<template>
  <div class=" relative w-screen h-[35vh] min-h-96 max-h-[720px] overflow-hidden">
    <img  v-for="(imagen,i) in props.imagenes" :src="imagen" alt="imagen" class="absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out"  :class="{ 'opacity-100': i === indice, 'opacity-0': i !== indice }">
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
const props=defineProps<{
  imagenes:string[];
}>()
//indice de imagen
const indice = ref(0);
//funcion para cambiar indice
let interval: ReturnType<typeof setInterval>|null=null;
const iniciarCarrucel =()=>{
  if(props.imagenes.length===0) return;
  interval=setInterval(()=>{
    indice.value =(indice.value +1) % props.imagenes.length;
  },3000);
}
//iniciamos carrucel al montar componente
onMounted(iniciarCarrucel);
onUnmounted(()=>{
  if (interval) clearInterval(interval)});

//imagen actual
const imagenActual=computed(()=>props.imagenes[indice.value]||"")
</script>
