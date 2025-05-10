<script lang="ts" setup>
import type { Producto } from "~/interfaces/Producto";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useProductStore } from "#imports";

const imagenesCarrucel: string[] = [
  "https://www.crochetyamigurumis.com/wp-content/uploads/2019/05/IMG_0454b.jpg",
  "https://i.ytimg.com/vi/a-ClUHsq1mg/maxresdefault.jpg",
  "https://www.supergurumi.com/wp-content/uploads/2022/10/Patrones-de-Crochet-Amigurumi-Gratis.jpg",
];
const categories:{image:string,name:string,rute:string}[] = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Amigurumi-_Ping%C3%BCino_con_orejas_de_conejo.jpg/1200px-Amigurumi-_Ping%C3%BCino_con_orejas_de_conejo.jpg",
    name: "Amigurimi",
    rute: "/productos/Amigurimi",
  },
  {
    image:
      "https://www.katia.com/files/mod/6224/patron-tejer-punto-ganchillo-mujer-top-primavera-verano-katia-6224-1-g.jpg",
    name: "Prendas",
    rute: "/productos/Prendas",
  },
  {
    image:
      "https://www.weareknitters.es/cdn/shop/files/befana.jpg?v=1703104099&width=1100",
    name: "Accesorios",
    rute: "/productos/Accesorios",
  },
  {
    image: "https://okdiario.com/coolthelifestyle/img/2023/07/04/graff.png",
    name: "Joyas",
    rute: "/productos/Joyas",
  },
  {
    image:
      "https://www.crochetisimo.com/wp-content/uploads/2018/04/29365844_604768666556616_7876383766418030592_n.jpg",
    name: "Regalos",
    rute: "/productos/Regalos",
  },
  {
    image:
      "https://www.crochetisimo.com/wp-content/uploads/2023/10/0e1d0cd3-e9ea-435c-816a-316fbe9c7fdd-827x1024.png",
    name: "Pedidos",
    rute: "/contacto",
  },
];
//llamamos a la store Products; despues se llamara a la opcion obtener mas vendidos
const productStore=useProductStore();
onMounted(async ()=>{
  productStore.recoverProducts();
  //si no hay
  if(!productStore.products.length){
    await productStore.loadProducts();
  }

})
const productos = computed(()=>productStore.getProducts);
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
</script>

<template>
  <div
    class="w-screen h-auto min-h-full flex flex-col items-center text-zinc-800"
  >
    <CarrucelPrincipal :imagenes="imagenesCarrucel" />
    <div class="w-[90%] flex items-center flex-col gap-6 py-6">
      <h3 class="text-3xl font-semibold">Mundo lleno de creatividad</h3>
      <p class="text-base">
        Lorem ipsum dolor sit amet consectetur adipiscing elit vestibulum,
        fringilla primis viverra urna sollicitudin semper venenatis, aliquet
        facilisi varius tristique molestie at nec. Cursus placerat inceptos
        accumsan nibh rutrum primis magnis, massa bibendum senectus dictumst
        augue sociosqu lobortis, venenatis neque ac sed iaculis nunc.
      </p>
      <div class="h-[auto] w-full grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-3 gap-3 lg:gap-2">
        <div
          v-for="category in categories"
          class="flex items-center justify-center  h-auto cursor-pointer"
        >
          <CategoryCard :image="category.image" :name="category.name" :rute="category.rute"/>
        </div>
      </div>
      <h3 class="text-3xl font-semibold font-daydream">Lo más vendido</h3>
      <ProductCarrucel :products="productos" />
      <h3 class="text-3xl font-semibold font-daydream">Compra en Artis</h3>
      <ValorCarrucel :valores="valores" />
    </div>
  </div>
</template>
