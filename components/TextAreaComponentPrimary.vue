<template>
  <div
    :class="[
      `h-[120px] w-full min-w-80 py-1 px-3 flex text-base text-zinc-800 items-center justify-center border-solid border-2 rounded-sm hover:border-pink-500 transition-all duration-150`,
      colorBorder,
    ]"
  >
    <div class="flex items-center justify-center text-xl pr-3 self-start">
      <FontAwesomeIcon
        :icon="icon"
        class="transition-all duration-150 hover:text-pink-500"
      />
    </div>
    <textarea
      class="flex-1 h-full focus:outline-none resize-none"
      :name="name"
      :id="name"
      required
      :placeholder="placeholder"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)
      "
    ></textarea>
  </div>
</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//propiedades
const props = withDefaults(
  defineProps<{
    name: string;
    icon: any;
    placeholder: string;
    colorBorder?: string;
    //para v-model
    modelValue: string;
  }>(),
  {
    colorBorder: "zinc-800",
  }
);
//Map de colores Permitidos
const colorBorderMap: Record<string, string> = {
  "gray-400": "border-gray-400",
  "zinc-800": "border-zinc-800",
};
const colorBorder = computed(
  () => colorBorderMap[props.colorBorder] || "border-gray-400"
);
//evento para v-model
defineEmits(["update:modelValue"]);
</script>
