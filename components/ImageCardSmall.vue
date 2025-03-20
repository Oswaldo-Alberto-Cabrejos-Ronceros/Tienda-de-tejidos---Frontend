<template>
  <div @click="emitirChangeImage()" class="flex w-20 h-20 cursor-pointer border-solid border-1 border-gray-400 rounded">
    <img class="w-20 h-20 object-cover" :src="props.image" :alt="props.name">
  </div>
</template>

<script lang="ts" setup>
import { defineEmits } from 'vue';
const props = defineProps<{
  id:number,
  name:string,
  image:string
}>()
const emit=defineEmits(["changeImage"]);
const emitirChangeImage=()=>{
  emit("changeImage",props.id)
}
</script>

<style>

</style>