<template>
  <div
    v-if="product"
    class="w-full flex gap-3 text-zinc-800 flex-col md:flex-row"
  >
    <!-- producto imagenes -->
    <div class="flex gap-1 w-full md:w-[60%]">
      <div class="flex flex-1 flex-col gap-1">
        <ImageCardSmall
          v-for="(image, id) in product.images"
          :id="id"
          :name="`${product.name} ${id}`"
          :image="image"
          @change-image="changeImage"
        />
      </div>
      <div class="flex items-center">
        <ImageCardLarge
          :name="product.name"
          :image="product.images[indexImage]"
        />
      </div>
    </div>
    <!-- precio y necesario para comprar -->
    <div class="w-full md:w-[40%] flex flex-col gap-4">
      <div class="flex items-center gap-1">
        <p class="text-2xl font-semibold">{{ product.name }}</p>
        <IconPrimary
          v-if="!isAdmin && !isFavorite"
          @click="isAuthenticated ? handleAddFavoriteProduct() : goToLogin()"
          :icono="iconHeart.icon"
          :color="iconHeart.color"
          :color-hover="iconHeart.colorHover"
        />
        <IconPrimary
          v-if="isFavorite"
          @click="handleDeleteFavoriteProduct"
          :icono="iconHeartFavorite.icon"
          :color="iconHeartFavorite.color"
          :color-hover="iconHeartFavorite.colorHover"
        />
      </div>
      <p class="text-2xl font-bold">S/{{ " " + product.price }}</p>
      <SelectComponent
        v-if="!isAdmin"
        :name="cantidadSelect.name"
        :options="cantidadSelect.options"
        v-model="quantity"
      />
      <!-- button  -->
      <ButtonPrimary
        v-if="!isAdmin"
        @click="emitirComprar(product)"
        :title="infoButton.title"
        :color-bg="infoButton.colorBg"
        :color-hover="infoButton.colorHover"
        :rounded="infoButton.rounded"
      />
      <!-- caracteristicas -->
      <p class="text-xl border-solid border-zinc-800 border-b w-full py-1">
        Información
      </p>
      <div class="text-base flex flex-col gap-1">
        <p>Características:</p>
        <p v-for="caracteristica in product.details">
          - {{ " " + caracteristica }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Producto } from "~/interfaces/Producto";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { ref } from "vue";
const props = defineProps<{
  product?: Producto;
  isAdmin?: boolean;
}>();
//authStore
const userStore = useUserStore();
const productStore = useProductStore();
onMounted(async () => {
  userStore.loadFromSession();
  productStore.loadProducts();
  if (!productStore.products.length) await productStore.loadProducts();
  if (userStore.isAuthenticated) {
    productStore.recoverFavoriteProducts();
    if (!productStore.favoriteProducts.length)
      await productStore.loadFavoriteProducts();
  }
});
//para el boton de favoritos
const isAuthenticated = computed(() => userStore.isAuthenticated);
const iconHeart: { icon: any; color: string; colorHover: string } = {
  icon: faHeart,
  color: "pink-300",
  colorHover: "pink-600",
};
const cantidadSelect: {
  name: string;
  options: { value: string | number; label: string }[];
} = {
  name: "cantidad",
  options: [
    {
      value: 1,
      label: "1",
    },
    {
      value: 2,
      label: "2",
    },
    {
      value: 3,
      label: "3",
    },
  ],
};
const infoButton: {
  title: string;
  colorBg: string;
  colorHover: string;
  rounded: string;
} = {
  title: "Comprar",
  colorBg: "pink-400",
  colorHover: "pink-600",
  rounded: "rounded-xl",
};
//manejo de imagenes
const indexImage = ref(0);
const changeImage = (index: number) => {
  indexImage.value = index;
};
//referencia para cantidad
const quantity = ref("1");
//emision de evento para compra
const emit = defineEmits(["comprar"]);
const emitirComprar = (product: Producto) => {
  emit("comprar", product, Number(quantity.value));
};
//funciones para el boton favorito
const goToLogin = () => {
  navigateTo("/auth/login");
};
//compose product
const { addFavoriteProduct, deleteFavoriteProduct } = useProduct();
//funciones que manejan la opcion favorito
const handleAddFavoriteProduct = async () => {
  if (props.product) {
    await addFavoriteProduct(props.product.id);
    await productStore.loadFavoriteProducts();
  }
};
const handleDeleteFavoriteProduct = async () => {
  if (props.product) {
    await deleteFavoriteProduct(props.product.id);
    await productStore.loadFavoriteProducts();
  }
};
//para saber si el producto es favorito o no
const { isFavoriteProduct } = useProductStore();
const isFavorite = computed(() => {
  return props.product ? isFavoriteProduct(props.product.id) : false;
});
console.log(isFavorite);
//icono cuando es favorito
const iconHeartFavorite: { icon: any; color: string; colorHover: string } = {
  icon: faHeart,
  color: "pink-600",
  colorHover: "pink-300",
};
</script>
