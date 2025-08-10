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
            :type="inputsAgregar[0].name"
            :name="inputsAgregar[0].name"
            v-model="formAgregar[inputsAgregar[0].name] as keyof ProductRequest
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

import type { Category } from "~/services/Category/domain/models/Category";
import type { ProductRequest } from "~/services/Product/domain/models/ProductRequest";
//informacion para el boton
const buttonAddTitle: string = "Agregar";
const inputsAgregar: {
  name: keyof ProductRequest;
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
  }
];
//para textarea
const textAreaAgregar: {
  name: keyof ProductRequest;
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
});

//obtenemos categorias y generos
const categoriesOptions = ref<{ value: number | string; label: string }[]>([]);
//funcion para rellenar options
const itemsToOptions = (items: Category[]) => {
  let options: { value: number | string; label: string }[] = [];
  items.forEach((item) => {
    options.push({ value: item.id, label: item.name });
  });
  return options;
};

const selectsAgregar = computed<
  {
    name: keyof ProductRequest;
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
//reactive de formulario
const formAgregar = reactive<ProductRequest>({
  name: "",
  categoryId: 1,
  description: "",
});


//emit
const emit = defineEmits(["send-product"]);
//funcion de envio de formulario
const sendFormAgregar = () => {
  emit("send-product", formAgregar);
};
</script>
