<template>
    <button :class="[`flex items-center justify-center h-[40px] min-w-full w-auto p-1 transition-all duration-150 hover:cursor-pointer`,textColor,colorBg,colorHover,rounded]">
      <span>{{ props.title }}</span>
    </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
const props=withDefaults(defineProps<{
title:string;
colorText?:string;
colorBg?:string;
colorHover?:string
rounded?:string
}>(),{
colorText:"neutral-50",
colorBg:"red-500",
colorHover:"red-600",
rounded:"rounded"
});

//Mapeo de colores permidos en Tailwind
const colorTextMap: Record<string,string>={
  'neutral-50':'text-neutral-50',
  'zinc-800':'text-zinc-800'
};
const colorBgMap:Record<string,string>={
  'red-500':'bg-red-500',
  'lime-300':'bg-lime-300',
  'lime-400':'bg-lime-400',
  'pink-400':"bg-pink-400",
  'pink-500':"bg-pink-500",
  'gray-200':"bg-gray-200"
};
const colorHoverMap:Record<string,string>={
  'red-600':'hover:bg-red-600',
  'lime-400':'hover:bg-lime-400',
  'lime-500':'hover:bg-lime-500',
  "pink-600":"hover:bg-pink-600",
  'gray-300':"hover:bg-gray-300"
};
const roundedMap:Record<string,string>={
  "rounded":"rounded",
  "rounded-xl":"rounded-xl",
  "rounded-2xl":"rounded-2xl"
}
const textColor=computed(()=>colorTextMap[props.colorText]||'text-neutral-50');
const colorBg=computed(()=>colorBgMap[props.colorBg]||'bg-red-500');
const colorHover=computed(()=>colorHoverMap[props.colorHover]||'hover:bg-red-600');
const rounded=computed(()=>roundedMap[props.rounded]||'rounded')
</script>

<style>

</style>