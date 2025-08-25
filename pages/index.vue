<script lang="ts" setup>
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import type { ProductWithVariants } from "~/services/Product/domain/models/ProductWithVariants";

const imagenesCarrucel: string[] = [
  "https://www.crochetyamigurumis.com/wp-content/uploads/2019/05/IMG_0454b.jpg",
  "https://i.ytimg.com/vi/a-ClUHsq1mg/maxresdefault.jpg",
  "https://www.supergurumi.com/wp-content/uploads/2022/10/Patrones-de-Crochet-Amigurumi-Gratis.jpg",
];
const categories = ref<{ image: string; name: string; rute: string }[]>([]);

const categoryPedido = {
  image:
    "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/2147507051/images/1ffe6b-f0a4-43e-13ff-15be78e21c_pexels-photo-3945638.webp",
  name: "Pedidos",
  rute: "/contacto",
};
//llamamos a la store Products; despues se llamara a la opcion obtener mas vendidos
const { findAllWithVariants } = useProductt();
const { findAll } = useCategory();
onMounted(async () => {
  productos.value = await findAllWithVariants();
  const categoriesData = await findAll();
  categories.value = categoriesData.map((category) => ({
    image: category.imageUrl,
    name: category.name,
    rute: `/productos/${category.name}`,
  }));
  //add pedidos
  categories.value.push(categoryPedido);
});
const productos = ref<ProductWithVariants[]>([]);
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
    class="w-full h-auto min-h-full flex flex-col items-center text-zinc-800"
  >
    <CarrucelPrincipal :imagenes="imagenesCarrucel" />
    <div class="w-[90%] flex items-center flex-col gap-6 py-6">
      <h3 class="text-2xl font-semibold">Mundo lleno de creatividad</h3>
      <p class="text-base">
        Lorem ipsum dolor sit amet consectetur adipiscing elit vestibulum,
        fringilla primis viverra urna sollicitudin semper venenatis, aliquet
        facilisi varius tristique molestie at nec. Cursus placerat inceptos
        accumsan nibh rutrum primis magnis, massa bibendum senectus dictumst
        augue sociosqu lobortis, venenatis neque ac sed iaculis nunc.
      </p>
      <div
        class="h-[auto] w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-2"
      >
        <div
          v-for="category in categories"
          class="flex items-center justify-center h-auto cursor-pointer"
        >
          <CategoryCard
            :image="category.image"
            :name="category.name"
            :rute="category.rute"
          />
        </div>
      </div>
      <h3 class="text-2xl font-semibold font-daydream">Lo más vendido</h3>
      <ProductCarrucel :products="productos" />
      <h3 class="text-2xl font-semibold font-daydream">Compra en Artis</h3>
      <ValorCarrucel :valores="valores" />
    </div>
  </div>
</template>
