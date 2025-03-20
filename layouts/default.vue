<script lang="ts" setup>
//importamos componente de confirmacion para modal generic
import CardConfirm from '~/components/CardConfirm.vue';

//para modal logOut
const showModalLogOut=ref(false);
const handleModalLogOut=()=>{
  showModalLogOut.value=!showModalLogOut.value;
};
//creamos una instancia de authStore
const authStore = useAuthStore();
const logOut = ()=>{
  authStore.logout();
  handleModalLogOut();
};
const handleLogOut=(flag:any)=>{
flag? logOut(): handleModalLogOut()
};
//mensaje para el componente del modal
const message={
  message:`¿Seguro que quieres cerrar sesión?`
}
</script>
<template>
  <!-- modal de confirmacion de cierre de sesion -->
   <ModalGeneric :show-value="showModalLogOut" :component="CardConfirm" :props="message" @update:show-value="handleModalLogOut" @send-element="handleLogOut"/>
  <!--Todo-->
  <div class="w-screen h-auto min-h-screen flex flex-col p-0 m-0 bg-neutral-50">
    <!--Header-Sup-->
    <div class="w-screen h-auto flex flex-col min-h-24">
      <TheHeader @log-out="handleModalLogOut"/>
    </div>
    <!--Principal-->
    <div class="w-screen h-auto flex-1 flex flex-col items-center pb-1">
      <slot />
    </div>
    <!--Footer-Inf-->
    <div class="w-screen h-auto min-h-56">
      <TheFooter/>
    </div>
  </div>
</template>
