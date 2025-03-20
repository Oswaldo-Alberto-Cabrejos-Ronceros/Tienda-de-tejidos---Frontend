<template>
  <div class="w-[90%] flex items-center flex-col gap-6 py-4 text-zinc-800">
    <h2 class="text-4xl self-start">Artis</h2>
    <p class="text-xl">
      Lorem ipsum dolor sit amet consectetur adipiscing elit, pellentesque
      tempor cubilia eget laoreet nam eleifend, rutrum ornare consequat
      venenatis semper nascetur. Arcu nullam rhoncus metus mollis habitasse
      porta dictumst congue, facilisi justo quisque aliquam id sodales eu
      semper, per penatibus nulla ullamcorper habitant sem senectus.
    </p>
    <div class="w-full flex flex-col sm:flex-row items-center justify-center gap-6">
      <div
        v-for="imagen in imagenes"
        class="w-50% flex-1 flex items-center justify-center"
      >
        <img
          class="object-cover w-96 h-[300px]"
          :src="imagen.url"
          :alt="imagen.name"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const imagenes: { name: string; url: string }[] = [
  {
    name: "amigurumi",
    url: "https://thewoobles.com/cdn/shop/files/88BKY-1b_2048x.jpg?v=1689725518",
  },
  {
    name: "prendas",
    url: "https://d22fxaf9t8d39k.cloudfront.net/3fafe065013398e66b39d025bb05a310c02e9d530ce7703ed8cf7dff22469cd3201619.jpg",
  },
];
</script>
