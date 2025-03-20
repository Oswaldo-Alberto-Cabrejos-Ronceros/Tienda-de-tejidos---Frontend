<template>
    <button :class="[`flex items-center justify-center h-[40px] min-w-full w-auto p-1 transition-all duration-150 border-solid border-2 hover:cursor-pointer`,textColor,colorBg,colorHover,rounded,colorBorder,textColorHover]">
      <span>{{ props.title }}</span>
    </button>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
title:string,
colorText?:string,
colorBg?:string,
colorHover?:string,
rounded?:string
}>(),{
colorText:"pink-500",
colorBg:"transparent",
colorHover:"pink-500",
rounded:"rounded"
});
//mapeo para los colores permitidos en tailwind
const colorTextMap: Record<string,string>={
  'neutral-50':'text-neutral-50',
  'pink-500':'text-pink-500',
  'zinc-800':'text-zinc-800'
};
const colorBgMap:Record<string,string>={
  'neutral-500':'bg-neutral-50',
  'red-500':'bg-red-500',
  'lime-300':'bg-lime-300',
  'pink-400':"bg-pink-400",
  'pink-500':"bg-pink-500",
};
const colorHoverMap:Record<string,string>={
  'red-600':'hover:bg-red-600',
  'lime-400':'hover:bg-lime-400',
  "pink-600":"hover:bg-pink-600",
};
//mapeo de rounded disponible en tailwind
const roundedMap:Record<string,string>={
  "rounded":"rounded",
  "rounded-xl":"rounded-xl",
  "rounded-2xl":"rounded-2xl"
};
const borderColorMap:Record<string,string>={
  'red-500':'border-red-500',
  'lime-300':'border-lime-300',
  'pink-400':"border-pink-400",
  'pink-500':"border-pink-500",
};
const textColorHoverMap:Record<string,string>={
  'neutral-500':'hover:text-neutral-50',
  'red-500':'hover:text-red-500',
  'lime-300':'hover:text-lime-300',
  'pink-400':"hover:text-pink-400",
  'pink-500':"hover:text-pink-500",
}
//constantes para aplicar clases con tailwind
const textColor = computed(()=>colorTextMap[props.colorText]||'text-pink-500');
const textColorHover = computed(()=>colorTextMap[props.colorBg]||'hover:text-neutral-50')
const colorBg = computed(()=>colorBgMap[props.colorBg]||'bg-neutral-50');
const colorHover = computed(()=>colorHoverMap[props.colorHover]||'hover:bg-pink-500');
const rounded = computed(()=>roundedMap[props.rounded]||'rounded');
const colorBorder = computed(()=>borderColorMap[props.colorHover]||'border-pink-500')
</script>
