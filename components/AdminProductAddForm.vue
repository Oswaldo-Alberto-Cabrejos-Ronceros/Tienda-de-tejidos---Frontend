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
            v-model="formAgregar[inputsAgregar[0].name] as keyof Producto
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
            v-model.number="formAgregar[select.name] as keyof Producto
            "
          />
        </div>
      </div>

      <div class="flex items-center w-auto min-w-[800px]">
        <div class="flex items-start h-full w-auto min-w-28">
          <p class="text-zing-800 text-xl">{{ inputsAgregar[1].title }}</p>
        </div>

        <div class="size-auto flex flex-col items-center gap-4">
          <div
            v-for="(image, index) in formAgregar.images"
            class="size-auto flex items-center justify-center"
          >
            <div class="w-lg flex items-center justify-center">
              <InputPrimary
                :icon="inputsAgregar[1].icon"
                :placeholder="inputsAgregar[1].placeholder"
                :type="inputsAgregar[1].name"
                :name="inputsAgregar[1].name"
                v-model="formAgregar.images[index]"
              />
            </div>
            <!-- boton eliminar -->
            <div class="flex items-center justify-center">
              <IconPrimary
                v-if="index"
                @click="eliminarImagenItem(index)"
                :icono="iconDelete.icon"
                :color="iconDelete.color"
                :color-hover="iconDelete.coloHover"
              />
            </div>
            <!-- boton agregar -->
            <div class="flex items-center justify-center h-auto w-40 px-4">
              <ButtonPrimary
                v-if="index === formAgregar.images.length - 1"
                @click.prevent="agregarImagenItem"
                :color-bg="botonAddItem.colorBg"
                :color-hover="botonAddItem.colorHover"
                :title="botonAddItem.title"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center w-auto min-w-[800px]">
        <div class="flex items-start h-full w-auto min-w-28">
          <p class="text-zing-800 text-xl">{{ textAreaAgregar.title }}</p>
        </div>

        <div class="size-auto flex flex-col items-center gap-4">
          <div
            v-for="(detail, index) in formAgregar.details"
            class="size-auto flex items-center justify-center"
          >
            <div class="w-lg flex items-center justify-center">
              <TextAreaComponentPrimary
                :icon="textAreaAgregar.icon"
                :name="textAreaAgregar.name"
                :placeholder="textAreaAgregar.placeholder"
                v-model="formAgregar.details[index]"
              />
            </div>
            <div class="size-auto flex items-center justify-center">
              <IconPrimary
                v-if="index"
                @click="eliminarDetalleItem(index)"
                :icono="iconDelete.icon"
                :color="iconDelete.color"
                :color-hover="iconDelete.coloHover"
              />
            </div>
            <div class="flex items-center justify-center h-auto w-40 px-4">
              <ButtonPrimary
                v-if="index === formAgregar.details.length - 1"
                @click.prevent="agregarDetalleItem"
                :color-bg="botonAddItem.colorBg"
                :color-hover="botonAddItem.colorHover"
                :title="botonAddItem.title"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center w-auto min-w-[800px]">
        <div class="flex items-center w-auto min-w-28">
          <p class="text-zing-800 text-xl">{{ inputsAgregar[2].title }}</p>
        </div>
        <div class="w-lg flex items-center justify-center">
          <InputPrimary
            :icon="inputsAgregar[2].icon"
            :placeholder="inputsAgregar[2].placeholder"
            :type="inputsAgregar[2].name"
            :name="inputsAgregar[2].name"
            v-model.number="formAgregar[inputsAgregar[2].name] as keyof Producto
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
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import type { Categoria } from "~/interfaces/Categoria";
import type { GenderStrick, Producto } from "~/interfaces/Producto";
//informacion para el boton
const buttonAddTitle: string = "Agregar";
const inputsAgregar: {
  name: keyof Producto;
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
    name: "images",
    title: "Imagenes",
    type: "text",
    icon: faImage,
    placeholder: "Ingrese Imagen",
  },
  {
    name: "price",
    title: "Precios",
    type: "number",
    icon: faMoneyBill,
    placeholder: "Ingrese Precio",
  },
];
//para textarea
const textAreaAgregar: {
  name: keyof Producto;
  title: string;
  icon: any;
  placeholder: string;
} = {
  name: "details",
  title: "Detalles",
  icon: faListUl,
  placeholder: "Ingrese Detalle",
};
//para select categoria

//categoryStore
const categoryStore = useCategoryStore();
//genderStore
const genderStore = useGenderStore();
//al montar cargamos categorias
onMounted(async () => {
  //para categorias
  categoryStore.recoverCategories();
  if (!categoryStore.categories.length) {
    await categoryStore.loadCategories();
  }
  //para genders
  genderStore.recoverGenders();
  if (!genderStore.genders.length) {
    await genderStore.loadGenders();
  }
});

//obtenemos categorias y generos
const categories = computed(() => categoryStore.categories);
const genders = computed(() => genderStore.genders);

//funcion para rellenar options
const itemsToOptions = (items: Categoria[] | GenderStrick[]) => {
  let options: { value: number | string; label: string }[] = [];
  items.forEach((item) => {
    options.push({ value: item.id, label: item.name });
  });
  return options;
};

const selectsAgregar = computed<
  {
    name: keyof Producto;
    title: string;
    options: { value: string | number; label: string }[];
  }[]
>(() => [
  {
    name: "category",
    title: "Categoria",
    options: itemsToOptions(categories.value),
  },
  {
    name: "gender",
    title: "Género",
    options: itemsToOptions(genders.value),
  },
]);
//reactive de formulario
const formAgregar = reactive<Producto>({
  name: "",
  category: 1,
  gender: 1,
  images: [""],
  details: [""],
  price: null,
});
//datos de botones añadir
const botonAddItem = {
  title: "Añadir",
  colorBg: "pink-500",
  colorHover: "pink-600",
};

//funciones para manegar imagenes
const agregarImagenItem = () => formAgregar.images.push("");
const eliminarImagenItem = (index: number) =>
  formAgregar.images.splice(index, 1);
//funciones para manegar details
const agregarDetalleItem = () => formAgregar.details.push("");
const eliminarDetalleItem = (index: number) =>
  formAgregar.details.splice(index, 1);
//informacion para el boton eliminar
const iconDelete: { icon: any; color: string; coloHover: string } = {
  icon: faTrash,
  color: "pink-500",
  coloHover: "pink-600",
};
//emit
const emit = defineEmits(["send-product"]);
//funcion de envio de formulario
const sendFormAgregar = () => {
  emit("send-product", formAgregar);
};
</script>
