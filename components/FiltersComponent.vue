<template>
  <div class="text-base text-zinc-800 min-w-40 relative">
    <button @click="handleDropbox()" class="px-2 cursor-pointer flex items-center justify-between gap-1 w-full">
<span>Filtros</span><FontAwesomeIcon :icon="faSliders"></FontAwesomeIcon>
    </button>
    <!-- Dropbox -->
     <div v-show="showDropbox" class="absolute border-solid border border-gray-400 flex flex-col rounded bg-neutral-50 min-w-40 ">

     </div>
  </div>
</template>

<script lang="ts" setup>
import { ref,onMounted, onUnmounted } from 'vue';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
//bandera para ver el dropbox
const showDropbox=ref(false);
//funcion para ver el dropbox
const handleDropbox=()=>showDropbox.value=!showDropbox.value;
//funcion para cerrar al hacer click fuera
const handleOutside =(event:MouseEvent)=>{
  if(!(event.target as HTMLElement).closest(".relative")){
    showDropbox.value=false;
  }
}
onMounted(()=>document.addEventListener("click",handleOutside));
onUnmounted(()=>document.removeEventListener("click",handleOutside));
</script>

<style>

</style>