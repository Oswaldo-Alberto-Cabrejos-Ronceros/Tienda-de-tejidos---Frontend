<template>
  <ModalGeneric
    :show-value="showModal"
    :component="ModalCardInformation"
    :props="propsAddProduct"
    @update:show-value="handleShowModal"
  />
  <div class="w-[90%] flex items-start flex-col py-4 gap-6 text-zinc-800">
    <!-- Carta principal de producto -->
    <ProductCardPrincipal :product="product" @consultar="consultar" />
    <!-- carrucel de productos similares -->
    <p
      class="text-2xl font-semibold border-solid border-zinc-800 border-b w-full py-1"
    >
      Puede que tambien te guste
    </p>
    <ProductCarrucel :products="products" />
    <!-- seccion mas opciones -->
    <!-- 
        <p class="text-xl">Explora más opciones</p>
    <div class="flex flex-col sm:flex-row justify-center gap-3">
      <div v-for="buttonTitle in buttonsOpcionesTitles" class="h-full w-32">
        <ButtonPrimary
          :title="buttonTitle"
          :color-bg="buttonsOpcionesUI.colorbg"
          :color-hover="buttonsOpcionesUI.colorHover"
          :rounded="buttonsOpcionesUI.rounded"
          :color-text="buttonsOpcionesUI.colorText"
        />
      </div>
    </div>
     -->
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import type { Producto } from "~/interfaces/Producto";
import { useCartStore } from "#imports";
import ModalCardInformation from "~/components/ModalCardInformation.vue";
import type { ProductWithVariants } from "~/services/Product/domain/models/ProductWithVariants";
const route = useRoute();
const { id } = route.params;
const idParsed = Number(id);
//producto simulado, luego o se llama al api mediante el store
const { findByIdWithVariants, findByCategoryWithVariants } = useProductt();
//onmounted para obtener productos
onMounted(async () => {
  //para menejar productos
  product.value = await findByIdWithVariants(idParsed);
  //for similar products
  products.value = await findByCategoryWithVariants(product.value.categoryId);
});
//obtenemos producto del store
const product = ref<ProductWithVariants | undefined>(undefined);
const products = ref<ProductWithVariants[]>([]);
//informacion de caracteristicas visuales de botones mas opciones
const buttonsOpcionesUI: {
  colorbg: string;
  colorText: string;
  colorHover: string;
  rounded: string;
} = {
  colorbg: "gray-200",
  colorText: "zinc-800",
  colorHover: "gray-300",
  rounded: "rounded-2xl",
};
const buttonsOpcionesTitles: string[] = ["Mujer", "Blusas", "Top"];
//boolean para showValue del modal
const showModal = ref(false);
//propiedades para modal agregar producto
const propsAddProduct = {
  image: product.value?.variants[0].images[0],
  name: product.value?.name,
  mensaje: "Producto agregado al carrito",
};
const handleShowModal = () => (showModal.value = !showModal.value);
//iniciamos cartStore
const cartStore = useCartStore();
//funciona para comprar
const agregarCarrito = (product: Producto, quantity: number) => {
  cartStore.addToCart(product, quantity);
  handleShowModal();
  setTimeout(() => {
    handleShowModal();
  }, 3000);
};
const { findNameById } = useCategory();
const consultar = (product: ProductWithVariants) => {
  const categoryName = findNameById(product.categoryId);
  const message = `Quiero consultar sobre el producto: ${categoryName} - ${product.name}`;
  const url = `https://wa.me/51902268600?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
</script>
