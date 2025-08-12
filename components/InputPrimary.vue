<template>
  <div
    :class="[
      `h-[40px] w-full min-w-80 py-1 px-3 flex text-base text-zinc-800 items-center justify-center border-solid border-2 rounded-sm hover:border-pink-500 transition-all duration-150`,
      colorBorder,
    ]"
  >
    <div class="flex items-center justify-center text-xl pr-3">
      <FontAwesomeIcon
        class="transition-all duration-150 hover:text-pink-500"
        :icon="props.icon"
      />
    </div>
    <input
      class="flex-1 h-full focus:outline-none"
      :type="props.type"
      required
      :name="props.name"
      :placeholder="props.placeholder"
      v-bind="props.type !== 'file' ? { value: props.modelValue } : {}"
      @input="onInput"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
const props = withDefaults(
  defineProps<{
    name: string;
    type: string;
    icon: any;
    placeholder: string;
    colorBorder?: string;
    //prop para v-model
    modelValue?: string | number | File;
  }>(),
  { colorBorder: "zinc-800" }
);
const colorBorderMap: Record<string, string> = {
  "gray-400": "border-gray-400",
  "zinc-800": "border-zinc-800",
};
const colorBorder = computed(
  () => colorBorderMap[props.colorBorder] || "border-gray-400"
);
//evento para v-model
const emit = defineEmits(["update:modelValue", "change"]);
//for manage value input
const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;

  if (props.type === "file") {
    // Para un solo archivo
    emit("update:modelValue", target.files?.[0] || null);
  } else {
    emit("update:modelValue", target.value);
  }
};
</script>
