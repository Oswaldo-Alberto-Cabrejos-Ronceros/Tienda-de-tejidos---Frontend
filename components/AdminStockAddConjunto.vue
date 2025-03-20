<template>
  <form @submit.prevent="sendStockConjunto"
    class="w-auto h-auto flex flex-col gap-4 items-center justify-center p-4 rounded-sm border-solid border-1 border-zinc-800 bg-neutral-50 shadow-md"
  >
    <!-- titulo -->
    <h3 class="text-2xl font-semibold text-zinc-800">Agregar Stock</h3>
    <div class="w-lg flex flex-col items-center justify-center gap-4">
      <div
        v-for="select in selectsData"
        class="w-full flex items-center justify-center gap-2"
      >
        <p class="text-xl text-zinc-800 w-14">
          {{ select.title }}
        </p>
        <div class="flex-1">
          <SelectComponent
            :name="select.name"
            :options="select.options"
            v-model="formAddStock[select.name] as keyof Stock
            "
          />
        </div>
      </div>
      <div class="w-full flex items-center justify-center gap-2">
        <p class="text-xl text-zinc-800 w-14">
          {{ inputData.title }}
        </p>
        <div class="flex-1">
          <InputPrimary
            :icon="inputData.icon"
            :type="inputData.type"
            :name="inputData.name"
            :placeholder="inputData.placeholder"
            v-model.number="formAddStock[inputData.name] as keyof Stock
            "/>
        </div>
      </div>
    </div>
    <ButtonPrimary :title="buttonAddTitle"/>
  </form>
</template>

<script lang="ts" setup>
import type { ColorStrict, SizeStrict, Stock } from "~/interfaces/Producto";
//importamos icono
import { faTags } from "@fortawesome/free-solid-svg-icons";
//instancia de stores de color y size
const sizeStore = useSizeStore();
const colorStore = useColorStore();
onMounted(async () => {
  //para sizes
  sizeStore.recoverSizes();
  if (!sizeStore.sizes.length) await sizeStore.loadSizes();
  //para color
  colorStore.recoverColors();
  if (!colorStore.colors.length) await colorStore.loadColors();
});
const sizes = computed(()=>sizeStore.sizes);
const colors = computed(()=>colorStore.colors) ;
const elementsToOptions = (elements: SizeStrict[] | ColorStrict[]) => {
  let options: { value: number; label: string }[] = [];
  elements.forEach((element) => {
    options.push({
      value: element.id,
      label: element.name,
    });
  });
  return options;
};
const optionsSizes = computed(()=>elementsToOptions(sizes.value)) ;
const optionsColors = computed(()=>elementsToOptions(colors.value)) ;
//formStock
const formAddStock = reactive<Stock>({
  color: 0,
  size: 0,
  stock: undefined,
});
//informacion para select
const selectsData= computed<{
  title: string;
  name: keyof Stock;
  options: { value: number; label: string }[];
}[]>(()=>[
  { title: "Color", name: "color", options: optionsColors.value },
  { title: "Talla", name: "size", options: optionsSizes.value },
]) ;
const inputData: {
  title: string;
  icon: any;
  type: string;
  placeholder: string;
  name: keyof Stock;
} = {
  title: "Stock",
  icon: faTags,
  type: "number",
  placeholder: "Ingrese stock",
  name: "stock",
};
//titulo para boton agregar
const buttonAddTitle:string="Agregar";
//emision de evento
const emit = defineEmits(['send-element'])
const sendStockConjunto=()=>{
    emit('send-element',formAddStock)
}
</script>
