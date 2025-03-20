<template>
  <div
    v-if="showValue"
    class="fixed flex flex-col items-center justify-center w-screen h-screen top-0 left-0 backdrop-blur-xs p-2 z-30"
    @click="closeModal"
  >
    <!-- renderizar componente dinamico -->
     <!-- para reenviar evento el componente dinamico debe emitir "send-element" -->
    <component
      @click.stop
      class="justify-self-center"
      :is="component"
      v-bind="props.props || {}"
      v-on="$attrs"
      @send-element="handleChildEvent" 
    />
  </div>
</template>

<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
});
const props = defineProps<{
  showValue: boolean; //ocultar o mostra value
  component: any; //componente a mostrar en el modal
  props?: Record<string, any>; //propiedades que necesite el componente
}>();
const emit = defineEmits(["update:showValue","send-element"]);
const closeModal = () => {
  emit("update:showValue", false);
};

console.log("Props recibidos en ModalGeneric:", props);
// Capturar y reemitir el evento del componente hijo
const handleChildEvent = (payload: any) => {
  console.log("ModalGeneric reemitiendo evento:", payload);
  emit("send-element", payload);
};
</script>
