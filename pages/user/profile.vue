<template>
  <div class="flex flex-col text-zinc-800 w-[90%] gap-2 pt-2">
    <div v-if="usuario" class="flex gap-2"><h3 class="text-3xl font-semibold">{{ `${usuario.first_name} ${usuario.last_name}` }}</h3><IconPrimary v-for="icon in iconsCrud" :icono="icon.icon" :color="icon.color" :color-hover="icon.colorHover"/></div>
    <p v-else >Cargando...</p>
    <p class="text-xl font-semibold">Información</p>
    <div v-if="usuario" v-for="infoKey in infoKeys" class="flex items-center gap-2"><p class="text-xl">{{ `${infoKey.title}:` }}</p><p class="text-base">{{ usuario[infoKey.clave] }}</p></div>
    <p v-else>Cargando...</p>
    <p class="text-xl font-semibold">Favoritos</p>
    <ProductCarrucel :products="productos"/>
    <p class="text-xl font-semibold">Ultimas compras</p>
  </div>
</template>

<script lang="ts" setup>
import type { Usuario } from '~/interfaces/Usuario';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import type { Producto } from '~/interfaces/Producto';
//obtener usuario de userStore
const userStore=useUserStore();
//llamamos al meotod de cargar desde sesion al montar el componente
//despues poner logica de cuando se acceda aqui si no esta autenticado redirigir al login
onMounted(()=>{
userStore.recoverUserData();
userStore.loadFromSession();
console.log(userStore.userData)
})
const usuario=computed(()=>
userStore.userData as Usuario
);
//productos
const productStore=useProductStore();
const productos : Producto[] = productStore.getProducts;
//key para iterar informacion
const infoKeys:{clave:(keyof Usuario), title:string}[]=[
{clave:"first_name",title:"Nombres"},
{clave:"last_name",title:"Apellidos"},
{clave:"phone",title:"Celular"}
];
//informacion de icons crud
const iconsCrud:{icon:any,color:string,colorHover:string}[]=[
  {
    icon:faTrash,
    color:"red-400",
    colorHover:"red-500"
  },
  {
   icon:faPen,
   color:"blue-400",
   colorHover:"blue-500"
  }
]
</script>

<style>

</style>