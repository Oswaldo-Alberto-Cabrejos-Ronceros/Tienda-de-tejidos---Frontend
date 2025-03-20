<template>
<p v-if="!data.length" class="text-xl font-semibold text-zinc-800 self-center">No hay {{ messageEmpty  }}</p>
  <table v-if="data.length" class="w-max text-zinc-800 text-center table-fixed self-center">
    <thead>
      <tr class="px-4 border-solid border-neutral-700 border-b text-xl font-semibold">
        <th
          v-for="(title, index) in titles"
          :key="index"
          class="px-4 py-1"
        >
          {{ title }}
        </th>
        <th class="px-4 py-1">Agregar</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index ) in data" :key="index" class="text-base border-solid border-neutral-700 border-b"> 
      <td v-for="(key,index) in keys" :key="index" class="px-4 py-1">{{ (item as Record<string,any>)[key]}}</td>
      <td class="flex items-center justify-center" @click="updateItem(item.id)" ><IconPrimary :icono="iconEdit.icon" :color-hover="iconEdit.colorHover"/></td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const props = defineProps<{
  //debe haber la misma cantidad de title que de key
  titles: string[];
  data: {id:number,[key:string]:any}[];
  messageEmpty:string
}>();
//obtenemos las key del object de data
//ide siempre tiene que ser la primera key para no mostrarla renderizada
const keys = computed(() =>
  props.data.length > 0 ? Object.keys(props.data[0]).splice(1) : []
);
//para icono
const iconEdit:{icon:any,colorHover:string}={
  icon:faPlus,
  colorHover:"red-500"
};
//definimos emit
const emit=defineEmits(["update:item"])
//funcion que emite update
const updateItem = (id?:number)=>{
  if(id!==undefined){
      emit('update:item',id)
  } else{
    console.error("id es indefinido")
  }

}
</script>
