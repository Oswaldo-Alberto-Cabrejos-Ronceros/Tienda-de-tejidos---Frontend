<template>
  <div class="h-[40px] w-full min-w-32">
    <input
      class="w-full h-full border-solid border-2 rounded-sm border-neutral-50 p-1 px-3 placeholder:text-gray-200 text-base text-neutral-50 focus:outline-none hover:border-lime-300 transition-all duration-150"
      :type="type"
      required
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue',($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  name: string;
  type: string;
  placeholder: string;
  //prop para v-model
  modelValue: string|number;
}>();
//evento para v-model
defineEmits(["update:modelValue"]);
</script>
