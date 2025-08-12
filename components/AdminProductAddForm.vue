<template>
  <form
    @submit.prevent="sendFormAgregar"
    class="w-full h-auto flex flex-col gap-4 items-center justify-center p-4"
  >
    <!-- titulo -->
    <h3 class="text-2xl font-semibold text-zinc-800">Agregar Producto</h3>
    <!-- datos -->
    <div class="h-auto w-auto flex flex-col gap-4 items-center justify-center">
      <!-- div unitaria de titulo con input/textarea/select -->
      <div class="flex items-center w-auto min-w-[800px]">
        <div class="flex items-center w-auto min-w-28">
          <p class="text-zing-800 text-xl">{{ inputsAgregar[0].title }}</p>
        </div>
        <div class="w-lg flex items-center justify-center">
          <InputPrimary
            :icon="inputsAgregar[0].icon"
            :placeholder="inputsAgregar[0].placeholder"
            :type="inputsAgregar[0].type"
            :name="inputsAgregar[0].name"
            v-model="formAgregar[inputsAgregar[0].name] as keyof ProductWithVariantRequest
            "
          />
        </div>
      </div>
      <div
        v-for="select in selectsAgregar"
        class="flex items-center w-auto min-w-[800px]"
      >
        <div class="flex items-center w-auto min-w-28">
          <p class="text-zing-800 text-xl">{{ select.title }}</p>
        </div>
        <div class="w-lg flex items-center justify-center">
          <SelectComponent
            :name="select.name"
            :options="select.options"
            v-model.number="formAgregar[select.name] as keyof ProductRequest
            "
          />
        </div>
      </div>

      <div class="flex items-center w-auto min-w-[800px]">
        <div class="flex items-center w-auto min-w-28">
          <p class="text-zing-800 text-xl">{{ textAreaAgregar.title }}</p>
        </div>
        <div class="w-lg flex items-center justify-center">
          <TextAreaComponentPrimary
            :icon="textAreaAgregar.icon"
            :placeholder="textAreaAgregar.placeholder"
            :name="textAreaAgregar.name"
            v-model.number="formAgregar[textAreaAgregar.name] as keyof ProductRequest
            "
          />
        </div>
      </div>
      <p>Variant</p>
      <div
        v-for="select in selectVariant"
        class="flex items-center w-auto min-w-[800px]"
      >
        <div class="flex items-center w-auto min-w-28">
          <p class="text-zing-800 text-xl">{{ select.title }}</p>
        </div>
        <div class="w-lg flex items-center justify-center">
          <SelectComponent
            :name="select.name"
            :options="select.options"
            v-model.number="formAgregar[select.name] as keyof ProductRequest
            "
          />
        </div>
      </div>
      <!-- price -->

      <div class="flex items-center w-auto min-w-[800px]">
        <div class="flex items-center w-auto min-w-28">
          <p class="text-zing-800 text-xl">{{ inputsAgregar[1].title }}</p>
        </div>
        <div class="w-lg flex items-center justify-center">
          <InputPrimary
            :icon="inputsAgregar[1].icon"
            :placeholder="inputsAgregar[1].placeholder"
            :type="inputsAgregar[1].type"
            :name="inputsAgregar[1].name"
            v-model="formAgregar[inputsAgregar[1].name] as keyof ProductWithVariantRequest
            "
          />
        </div>
      </div>
      <!-- image -->

      <div class="flex items-center w-auto min-w-[800px]">
        <div class="flex items-center w-auto min-w-28">
          <p class="text-zing-800 text-xl">{{ inputsAgregar[2].title }}</p>
        </div>
        <div class="w-lg flex items-center justify-center">
          <InputPrimary
            :icon="inputsAgregar[2].icon"
            :placeholder="inputsAgregar[2].placeholder"
            :type="inputsAgregar[2].type"
            :name="inputsAgregar[2].name"
            v-model="formAgregar[inputsAgregar[2].name] as keyof ProductWithVariantRequest
            "
          />
        </div>
      </div>
      <!-- button -->
      <div class="h-auto w-36">
        <ButtonPrimary :title="buttonAddTitle" />
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
//importamos iconos
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import type { ProductWithVariantSchema } from "~/interfaces/ProductWithVariantSchema";
import type { SelectOption } from "~/interfaces/SelectOption";

import type { Category } from "~/services/Category/domain/models/Category";
import type { Color } from "~/services/Color/domain/models/Color";
import type { ProductRequest } from "~/services/Product/domain/models/ProductRequest";
import type { ProductWithVariantRequest } from "~/services/Product/domain/models/ProductWithVariantRequest";
import type { Size } from "~/services/Size/domain/models/Size";
//informacion para el boton
const buttonAddTitle: string = "Agregar";
const inputsAgregar: {
  name: keyof ProductWithVariantSchema;
  title: string;
  type: string;
  icon: any;
  placeholder: string;
}[] = [
  {
    name: "name",
    title: "Nombre",
    type: "text",
    icon: faTag,
    placeholder: "Ingrese Nombre",
  },
  {
    name: "price",
    title: "Precio",
    type: "number",
    icon: faTag,
    placeholder: "Ingrese Precio",
  },
  {
    name: "image",
    title: "Imagen",
    type: "file",
    icon: faTag,
    placeholder: "Seleccione Imagen",
  },
];

//para textarea
const textAreaAgregar: {
  name: keyof ProductWithVariantSchema;
  title: string;
  icon: any;
  placeholder: string;
} = {
  name: "description",
  title: "Descripcion",
  icon: faListUl,
  placeholder: "Ingrese Descripción",
};
//para select categoria

//categoryStore

//al montar cargamos categorias
onMounted(async () => {
  //para categorias
  const { findAll } = useCategory();
  const categories = await findAll();
  categoriesOptions.value = itemsToOptions(categories);
  //for colors
  const { findAll: findAllColors } = useColorr();
  const colors = await findAllColors();
  colorsOptions.value = itemsToOptions(colors);
  //for sizes
  const { findAll: findAllSizes } = useSizee();
  const sizes = await findAllSizes();
  sizesOptions.value = itemsToOptions(sizes);
});

//ref for selects
const categoriesOptions = ref<SelectOption[]>([]);
const colorsOptions = ref<SelectOption[]>([]);
const sizesOptions = ref<SelectOption[]>([]);
//funcion para rellenar options
const itemsToOptions = (items: Category[] | Color[] | Size[]) => {
  let options: { value: number | string; label: string }[] = [];
  items.forEach((item) => {
    options.push({ value: item.id, label: item.name });
  });
  return options;
};

const selectsAgregar = computed<
  {
    name: keyof ProductWithVariantSchema;
    title: string;
    options: { value: string | number; label: string }[];
  }[]
>(() => [
  {
    name: "categoryId",
    title: "Categoria",
    options: categoriesOptions.value,
  },
]);

//for select variant
const selectVariant = computed<
  {
    name: keyof ProductWithVariantSchema;
    title: string;
    options: { value: string | number; label: string }[];
  }[]
>(() => [
  {
    name: "colorId",
    title: "Color",
    options: colorsOptions.value,
  },
  {
    name: "sizeId",
    title: "Tamaño",
    options: sizesOptions.value,
  },
]);

//reactive de formulario
const formAgregar = reactive<ProductWithVariantSchema>({
  name: "",
  categoryId: 1,
  description: "",
  colorId: 1,
  sizeId: 1,
  price: 0,
  image: null,
});

//emit
const emit = defineEmits(["send-product"]);
//funcion de envio de formulario
const sendFormAgregar = () => {
  emit("send-product", formAgregar);
};
</script>
