<template>
  <ModalGeneric :show-value="showModal" :component="ModalCardInformation" :props="propsAddProduct" @update:show-value="handleShowModal"/>
  <div class="w-[90%] flex items-start flex-col py-4 gap-6 text-zinc-800">
    <!-- Carta principal de producto -->
    <ProductCardPrincipal :product="product" @comprar="agregarCarrito"/>
    <!-- carrucel de productos similares -->
    <p class="text-2xl font-semibold border-solid border-zinc-800 border-b w-full py-1">Puede que tambien te guste</p>
    <ProductCarrucel :products="productos" />
    <!-- seccion mas opciones -->
    <p class="text-xl">Explora más opciones</p>
    <div class="flex flex-col sm:flex-row justify-center gap-3">
      <div v-for="buttonTitle in buttonsOpcionesTitles" class="h-full w-32"> <ButtonPrimary :title="buttonTitle" :color-bg="buttonsOpcionesUI.colorbg" :color-hover="buttonsOpcionesUI.colorHover" :rounded="buttonsOpcionesUI.rounded" :color-text="buttonsOpcionesUI.colorText"/></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import type { Producto } from "~/interfaces/Producto";
import { useProductStore } from "#imports";
import { useCartStore } from "#imports";
import ModalCardInformation from "~/components/ModalCardInformation.vue";
const route = useRoute();
const { categoria, id } = route.params;
const idParsed=Number(id);
//producto simulado, luego o se llama al api mediante el store
const productStore=useProductStore(); 
//onmounted para obtener productos 
onMounted(()=>{
  //para menejar productos
  productStore.recoverProducts();
  if(!productStore.products.length) productStore.loadProducts()
});
//obtenemos producto del store
const product = computed(()=> productStore.getProductById(idParsed));
//simulacion de productos simulares de la misma categorias y mas vendidos
const productos=asyncComputed(async()=>{
  productStore.recoverProducts();
  if(!productStore.products.length){
    productStore.loadProducts()
  }
  return  productStore.getProductsByCategory(product.value?.category||null);
},[]);
//informacion de caracteristicas visuales de botones mas opciones
const buttonsOpcionesUI:{colorbg:string,colorText:string,colorHover:string,rounded:string}={
  colorbg:"gray-200",
  colorText:"zinc-800",
  colorHover:"gray-300",
  rounded:"rounded-2xl"
}
const buttonsOpcionesTitles:string[]=[
  "Mujer","Blusas","Top"
];
//boolean para showValue del modal
const showModal=ref(false)
//propiedades para modal agregar producto
const propsAddProduct = {
  image:product.value?.images[0],
  name:product.value?.name,
  mensaje: "Producto agregado al carrito",
};
const handleShowModal=()=>showModal.value=!showModal.value;
//iniciamos cartStore
const cartStore=useCartStore();
//funciona para comprar
const agregarCarrito=(product:Producto,quantity:number)=>{
cartStore.addToCart(product,quantity);
handleShowModal();
setTimeout(() => {
  handleShowModal()
}, 3000);
}

</script>


