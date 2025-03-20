<template>
  <CartEmpty v-if="cartStore.isEmpty" />
  <div
    v-if="!cartStore.isEmpty"
    class="flex flex-col w-screen items-center justify-center"
  >
    <!-- imagen superios -->
    <CartImagenAgredecimiento
      :image="imagenAgradecimiento.image"
      :title="imagenAgradecimiento.title"
      :content="imagenAgradecimiento.content"
    />
    <div class="w-[90%] flex flex-col gap-4">
      <!-- fases de compra card -->
      <BarProgressCart />
      <!-- seccion princiapal de carrito -->
      <CartMiCarrito
        :products="products"
        :cost-total="costTotal"
        @eliminar="removerItemCart"
        @actualizar-cantidad="actualizarCantidadProducto"
      />

      <!-- carrucel de valores -->
      <div class="py-6"><ValorCarrucel :valores="valores" /></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import type { Producto } from "~/interfaces/Producto";
import { computed } from "#imports";
import { useCartStore } from "#imports";
const imagenAgradecimiento: { image: string; title: string; content: string } =
  {
    image:
      "https://hopelesslydevotedcrochet.com/wp-content/uploads/2021/02/IMG_20210206_132425-scaled.jpg",
    title: "¡Falta poco!",
    content: `Lorem ipsum dolor sit amet consectetur adipiscing elit, pellentesque tempor cubilia eget laoreet 
  nam eleifend, rutrum ornare consequat venenatis semper nascetur. Lorem ipsum dolor sit amet consectetur 
  adipiscing elit, pellentesque tempor cubilia eget laoreet nam eleifend, rutrum ornare consequat venenatis 
  semper nascetur. `,
  };
//valores para carrucel
const valores: { name: string; icon: any; description: string }[] = [
  {
    name: "Sostenibilidad",
    icon: faSeedling,
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit vestibulum, fringilla primis",
  },
  {
    name: "Calidad",
    icon: faStar,
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit vestibulum, fringilla primis",
  },
  {
    name: "Compra Segura",
    icon: faBagShopping,
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit vestibulum, fringilla primis",
  },
];
//productos del carrito obtenidos del store cart
const cartStore = useCartStore();
//al montar cargamos los productos de la session
onMounted(()=>{
  cartStore.loadFromSession();
})
const products = computed(() => cartStore.products);
const costTotal = computed(() => cartStore.totalPrice);
//funcion para eliminar producto del carrito
const removerItemCart = (productId: number) => {
  cartStore.removeFromCart(productId);
};
const actualizarCantidadProducto = (payload:{idProduct: number, quantity: number}) => {
  console.log("Recibido y actualizando ", payload.idProduct, payload.quantity);
  cartStore.changeQuantityProduct(payload.idProduct, payload.quantity);
};
</script>
