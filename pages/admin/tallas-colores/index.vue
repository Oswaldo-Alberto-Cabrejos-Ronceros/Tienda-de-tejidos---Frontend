<template>
  <!-- modales -->
  <!-- modal size -->
  <ModalGeneric
    @send-element="sendSize"
    :show-value="showModalSize"
    :component="AdminSizeAddForm"
    @update:show-value="handleModalSize"
  />
  <!-- modal color -->
  <ModalGeneric
    @send-element="sendColor"
    :show-value="showModalColor"
    :component="AdminColorAddForm"
    @update:show-value="handleModalColor"
  />
  <div class="w-full h-auto flex flex-col py-1 px-2">
    <h3 class="text-2xl font-semibold py-1 text-zinc-800">Tallas y colores</h3>
    <div class="w-full flex">
      <div
        class="w-1/2 h-auto flex justify-start items-center flex-col flex-1 gap-4"
      >
        <!-- tabla tallas -->
        <TablePrimary :titles="titlesTableTallas" :data="sizes" />
        <div class="h-auto w-32">
          <ButtonSecondary @click="handleModalSize" :title="buttonsTitle" />
        </div>
      </div>
      <div
        class="w-1/2 h-auto flex justify-center items-center flex-col flex-1 gap-4"
      >
        <!-- tabla colores -->
        <TablePrimary :titles="titlesTableColores" :data="colors" />
        <div class="h-auto w-32">
          <ButtonSecondary @click="handleModalColor" :title="buttonsTitle" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AdminColorAddForm from "~/components/AdminColorAddForm.vue";
import AdminSizeAddForm from "~/components/AdminSizeAddForm.vue";
import type { Color } from "~/services/Color/domain/models/Color";
import type { ColorRequest } from "~/services/Color/domain/models/ColorRequest";
import type { Size } from "~/services/Size/domain/models/Size";
import type { SizeRequest } from "~/services/Size/domain/models/SizeRequest";

definePageMeta({
  layout: "admin",
});
//para talla
const titlesTableTallas: string[] = ["N°", "Talla"];
//para colores
const titlesTableColores: string[] = ["N°", "Color", "Código"];
const { findAll: findAllSizes } = useSizee();
const { findAll: findAllColors } = useColorr();
//obtenemos la informacion de las stores
onMounted(async () => {
  loadSizesAndColors();
});

const loadSizesAndColors = async () => {
  sizes.value = await findAllSizes();
  colors.value = await findAllColors();
  console.log("Tallas:", sizes.value);
  console.log("Colores:", colors.value);
};

const sizes = ref<Size[]>([]);
const colors = ref<Color[]>([]);
const buttonsTitle: string = "Agregar";
//concerniente al modal de tallas
const showModalSize = ref(false);
const handleModalSize = () => (showModalSize.value = !showModalSize.value);
//funcion para enviar talla
const sendSize = async (size: SizeRequest) => {
  console.log("Desde index", size);
  //enviamos talla al backend
  const { create } = useSizee();
  await create(size);
  handleModalSize();
  loadSizesAndColors();
};
//concerniente al modal de colores
const showModalColor = ref(false);
const handleModalColor = () => (showModalColor.value = !showModalColor.value);
const sendColor = async (color: ColorRequest) => {
  console.log("Desde index", color);
  //enviamos color al backend
  const { create } = useColorr();
  //cerramos modal
  await create(color);
  handleModalColor();
  loadSizesAndColors();
};
</script>
