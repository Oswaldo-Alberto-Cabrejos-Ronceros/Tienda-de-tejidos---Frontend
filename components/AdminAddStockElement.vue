<template>
  <form @submit.prevent="handleAddStock"
    class="w-auto h-auto flex flex-col gap-4 items-center justify-center p-4 rounded-sm border-solid border-1 border-zinc-800 bg-neutral-50 shadow-md"
  >
    <h3 class="text-2xl font-semibold text-zinc-800">Agregar Stock</h3>
    <div class="w-lg flex items-center justify-center">
      <InputPrimary
        :icon="inputData.icon"
        :placeholder="inputData.placeholder"
        :type="inputData.type"
        :name="inputData.name"
        v-model="formAddStock[inputData.name] as keyof Stock
    "
      />
    </div>
    <div class="w-full flex items-center justify-between text-xl text-zinc-800">
      <p>Stock inicial: {{ initialStock.stock }}</p>
      <p>Stock resultante: {{resultantStock }}</p>
    </div>
    <ButtonPrimary :title="buttonAddTitle" />
  </form>
</template>

<script lang="ts" setup>
//importamos icono
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import type { Stock } from "~/interfaces/Producto";
const props = defineProps<{
  idStock: number;
}>();
//button title
const buttonAddTitle: string = "Agregar";
//formulario
const formAddStock = reactive<Stock>({
  stock: 0,
});
const inputData: {
  icon: any;
  placeholder: string;
  type: string;
  name: keyof Stock;
} = {
  icon: faPlus,
  placeholder: "Ingrese stock",
  type: "number",
  name: "stock",
};
//obtenemos funcion de useStock
const {getStockById}= useStock();
//obtenemos initialStock
const initialStock = await getStockById(props.idStock);
const resultantStock = computed(() => {
 return (initialStock.stock??0) + Number((formAddStock.stock ?? 0));
});
//emit
const emit=defineEmits(['send-element']);
const handleAddStock=()=>{
  emit('send-element',toRaw(resultantStock.value))
}
</script>
