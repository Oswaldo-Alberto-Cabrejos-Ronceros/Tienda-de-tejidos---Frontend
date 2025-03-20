<template>
  <div
    class="w-full min-w-32 max-w-3xl rounded border-solid border-1 border-gray-400 p-1 text-base"
  >
    <select
      class="w-full focus:outline-none"
      :name="name"
      :id="name"
      :value="modelValue"
      @input="
        $emit('update:modelValue', castValue(($event.target as HTMLSelectElement).value))
      "
    >
      <option v-for="option in options" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  name: string;
  options: { value: string | number; label: string }[];
  //propiedad para v-model
  modelValue: string | number;
}>();
//evento para v-model
defineEmits(["update:modelValue"]);
// castear si son numeros
const castValue = (value: string) => {
  return isNaN(Number(value)) ? value : Number(value);
};
</script>
