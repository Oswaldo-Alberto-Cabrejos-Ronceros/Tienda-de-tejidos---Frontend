<template>
  <div class="text-base text-zinc-800 min-w-40 relative">
    <button @click="handleDropbox()" class="px-2 cursor-pointer flex items-center justify-between gap-1 w-full"><span>{{ orderSelected }}</span><FontAwesomeIcon v-show="!showDropbox" :icon="faChevronDown"></FontAwesomeIcon><FontAwesomeIcon v-show="showDropbox" :icon="faChevronUp"></FontAwesomeIcon></button>
    <!-- Dropbox -->
    <div v-show="showDropbox" class="absolute border-solid border border-gray-400 flex flex-col rounded bg-neutral-50 min-w-40 ">
      <div v-for="option in options" @click="changeOption(option)" class="transition-all duration-150 cursor-pointer px-2 py-1 hover:bg-gray-200">{{ option }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref,onMounted, onUnmounted } from 'vue';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
//bandera para ver el dropbox
const showDropbox=ref(false);
const orderSelected=ref("Predeterminado");
const options:string[]=[
  "Predeterminado",
  "Menor Precio",
  "Mayor Precio"
]
//funcion para ver el dropbox
const handleDropbox=()=>showDropbox.value=!showDropbox.value;
//funcion para cambiar la opcion
function changeOption(option:string){
  orderSelected.value=option;
  showDropbox.value=false;
};
//funcion para cerrar dropbox al hacer click fuera
const handleClickOutside = (event:MouseEvent)=>{
  if(!(event.target as HTMLElement).closest(".relative")){
    showDropbox.value=false;
  }
};
onMounted(()=>document.addEventListener("click",handleClickOutside));
onUnmounted(()=>document.removeEventListener("click", handleClickOutside));
</script>


