<template>
  <div class="flex w-min items-center justify-center">
    <FontAwesomeIcon
      :class="[
        'text-2xl p-1 transition-all duration-150 cursor-pointer',
        textColor,
        textColorHover,
      ]"
      :icon="icono"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    icono: any;
    color?: string;
    colorHover?: string;
  }>(),
  {
    color: "zinc-800",
    colorHover: "pink-400",
  }
);

// Mapeo de colores permitidos en Tailwind
const colorMap: Record<string, string> = {
  "pink-300": "text-pink-300",
  "red-400": "text-red-400",
  "neutral-50": "text-neutral-50",
  "blue-400": "text-blue-400",
  "pink-600": "text-pink-600",
};

const colorHoverMap: Record<string, string> = {
  "pink-600": "hover:text-pink-600",
  "lime-500": "hover:text-lime-500",
  "neutral-50": "hover:text-neutral-50",
  "red-500": "hover:text-red-500",
  "blue-500": "hover:text-blue-500",
  "pink-300": "hover:text-pink-300",
};

const textColor = computed(() => colorMap[props.color] || "text-zinc-800");
const textColorHover = computed(
  () => colorHoverMap[props.colorHover] || " hover:text-pink-400"
);
</script>
