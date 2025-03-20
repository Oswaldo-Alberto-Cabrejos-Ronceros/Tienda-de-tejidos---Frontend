<template>
  <div class="w-[90%] py-4">
    <CardListInformation :title="title" :content="information"/>
  </div>
</template>

<script lang="ts" setup>
const title: string = "Preguntas frecuentes";
const information: { subtitle: string; content: string }[] = [
  {
    subtitle: "¿Que es Artis?",
    content: `Lorem ipsum dolor sit amet consectetur adipiscing elit,
     pellentesque tempor cubilia eget laoreet nam eleifend, rutrum ornare 
     consequat venenatis semper nascetur. Arcu nullam rhoncus metus mollis 
     habitasse porta dictumst congue, facilisi justo quisque aliquam id sodales 
     eu semper, per penatibus nulla ullamcorper habitant sem senectus. `
  },
  {
    subtitle: "¿Como realizo una compra?",
    content: `Lorem ipsum dolor sit amet consectetur adipiscing elit, 
    pellentesque tempor cubilia eget laoreet nam eleifend, rutrum ornare 
    consequat venenatis semper nascetur. Arcu nullam rhoncus metus mollis
     habitasse porta dictumst congue, facilisi justo quisque aliquam id 
     sodales eu semper, per penatibus nulla ullamcorper habitant sem senectus. `
  },  {
    subtitle: "¿Como se realiza el envio?",
    content: `Lorem ipsum dolor sit amet consectetur adipiscing elit, pellentesque
     tempor cubilia eget laoreet nam eleifend, rutrum ornare consequat venenatis 
     semper nascetur. Arcu nullam rhoncus metus mollis habitasse porta dictumst congue, 
     facilisi justo quisque aliquam id sodales eu semper, per penatibus nulla ullamcorper
      habitant sem senectus. `
  },{
    subtitle: "¿Como se realiza el pago?",
    content: `Lorem ipsum dolor sit amet consectetur adipiscing elit, pellentesque
     tempor cubilia eget laoreet nam eleifend, rutrum ornare consequat venenatis
      semper nascetur. Arcu nullam rhoncus metus mollis habitasse porta dictumst congue, 
      facilisi justo quisque aliquam id sodales eu semper, per penatibus nulla ullamcorper 
      habitant sem senectus. `
  }]
</script>

<style>

</style>