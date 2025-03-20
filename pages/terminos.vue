<template>
  <div class="w-[90%] py-4">
<CardListInformation :title="title" :content="information"/>
  </div>
</template>

<script lang="ts" setup>
const title: string = "Términos y condiciones";
const information: { subtitle: string; content: string }[] = [
  {
    subtitle: "Uso de datos",
    content: `Lorem ipsum dolor sit amet consectetur adipiscing elit, 
pellentesque tempor cubilia eget laoreet nam eleifend, rutrum ornare 
consequat venenatis semper nascetur. Arcu nullam rhoncus metus mollis 
habitasse porta dictumst congue, facilisi justo quisque aliquam id 
sodales eu semper, per penatibus nulla ullamcorper habitant sem senectus. `
  },
  {
    subtitle: "Comprobante electronico",
    content: `Lorem ipsum dolor sit amet consectetur adipiscing elit, 
    pellentesque tempor cubilia eget laoreet nam eleifend, rutrum ornare
     consequat venenatis semper nascetur. Arcu nullam rhoncus metus mollis 
     habitasse porta dictumst congue, facilisi justo quisque aliquam id
      sodales eu semper, per penatibus nulla ullamcorper habitant sem senectus. `
  },
  {
    subtitle: "Envios y entregas",
    content: `Lorem ipsum dolor sit amet consectetur adipiscing elit, pellentesque 
    tempor cubilia eget laoreet nam eleifend, rutrum ornare consequat venenatis 
    semper nascetur. Arcu nullam rhoncus metus mollis habitasse porta dictumst congue, 
    facilisi justo quisque aliquam id sodales eu semper, per penatibus
     nulla ullamcorper habitant sem senectus. `
  },
  {
    subtitle: "Cambios, devoluciones y reembolsos",
    content: `Lorem ipsum dolor sit amet consectetur adipiscing elit, pellentesque
     tempor cubilia eget laoreet nam eleifend, rutrum ornare consequat venenatis
      semper nascetur. Arcu nullam rhoncus metus mollis habitasse porta dictumst congue, 
      facilisi justo quisque aliquam id sodales eu semper, per penatibus nulla ullamcorper
       habitant sem senectus. `
  },
  {
    subtitle: "Contacto y atención al cliente",
    content: `Lorem ipsum dolor sit amet consectetur adipiscing elit, pellentesque tempor 
    cubilia eget laoreet nam eleifend, rutrum ornare consequat venenatis semper nascetur. 
    Arcu nullam rhoncus metus mollis habitasse porta dictumst congue, facilisi justo quisque
     aliquam id sodales eu semper, per penatibus nulla ullamcorper habitant sem senectus. `
  }
];
</script>

<style></style>
