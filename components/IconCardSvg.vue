<template>
  <div :class="['flex items-center justify-center rounded-full w-48 h-[192px] w transition-all duration-500 ',colorBg,colorIcon,colorHover]">
    <component :is="props.icono" :class="[size]" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
const props = withDefaults(defineProps<{
  icono:any,
  colorBg:string,
  size:string
  colorIcon?:string,
  colorHover:string
}>(),{
  colorIcon:"neutral-50"
});
//mapeamos colores permitidos en tailwind
const colorBgMap:Record<string,string>={
  "pink-500":"bg-pink-500",
  "red-600":"bg-red-600",
  "lime-400":"bg-lime-400",
  "sky-500":"bg-sky-500",
  "violet-600":"bg-violet-600"
}
const colorIconMap:Record<string,string>={
  "neutral-50":"text-neutral-50",
  "zinc-800":"text-zinc-800"
}
const colorHoverMap:Record<string,string>={
  "pink-600":"hover:bg-pink-600",
  "red-700":"hover:bg-red-700",
  "lime-500":"hover:bg-lime-500",
  "sky-600":"hover:bg-sky-600",
  "violet-700":"hover:bg-violet-700"
};
const sizeMap:Record<string,string>={
  "48":"w-48",
  "64":"w-64",
}
const colorBg=computed(()=> colorBgMap[props.colorBg]);
const colorIcon=computed(()=> colorIconMap[props.colorIcon]||"text-neutral-50");
const colorHover=computed(()=>colorHoverMap[props.colorHover]);
const size=computed(()=>sizeMap[props.size]|| "w-16");
</script>
