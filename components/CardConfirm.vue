<template>
  <div class="w-auto h-auto flex flex-col gap-4 items-center justify-center py-6 px-10 rounded-sm border-solid border-1 border-zinc-800 bg-neutral-50 shadow-md">
    <p class="text-xl text-zinc-800 font-semibold">{{ message }}</p>
    <div class="w-full flex items-center justify-center gap-6">
      <div v-for="button in dataButtons" class=" w-10"><ButtonPrimary  :title="button.title" :color-bg="button.colorBg" :color-hover="button.colorHover" @click="confirm(button.click)"/></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  message:string
}>();
//emit 
const emit = defineEmits(["send-element"]);
//funcion para confirmar
const confirm = (flag:boolean)=>{
  emit('send-element',flag)
}
const dataButtons:{title:string,colorBg?:string,colorHover?:string,click:boolean}[]=[
  {
    title:"Si",
    click:true
  },
  {
    title:"No",
    colorBg:"lime-400",
    colorHover:"lime-500",
    click:false
  }
];

</script>

