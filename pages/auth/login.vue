<template>
  <form
    @submit.prevent="submitLogin"
    class="flex flex-1 flex-col w-[40vw] min-w-56 max-w-96 text-zinc-800 justify-center items-center gap-4 justify-self-center"
  >
    <h3 class="text-3xl font-semibold">Iniciar Sesión</h3>
    <InputPrimary
      v-for="input in inputsLogin"
      :name="input.name"
      :type="input.type"
      :icon="input.icon"
      :placeholder="input.placeholder"
      v-model="formLogin[input.name as keyof LoginForm]"
    />
    <div class="h-auto w-36">
      <ButtonPrimary
        :title="buttonLogin.title"
        :rounded="buttonLogin.rounded"
      />
    </div>
    <NuxtLink to="/auth/password-reset"
      ><p
        class="text-sm transition-all duration-150 text-blue-500 hover:text-blue-600"
      >
        ¿Olvidaste tu contraseña?
      </p></NuxtLink
    >
    <!-- 
        <div class="flex items-center justify-center gap-2 text-sm">
      <p>¿No tienes una cuenta?</p>
      <NuxtLink
        class="transition-all duration-150 text-blue-500 hover:text-blue-600"
        to="/auth/register"
        ><p>Registrate Aqui</p></NuxtLink
      >
    </div>
     -->
  </form>
</template>

<script lang="ts" setup>
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { useAuthentication } from "~/composables/useAuthentication";
import type { LoginForm } from "~/interfaces/auth";

//methods
const { login } = useAuthentication();

//reactive formulario
const formLogin = reactive<LoginForm>({
  email: "",
  password: "",
});
const inputsLogin: {
  name: keyof LoginForm;
  type: string;
  icon: any;
  placeholder: string;
}[] = [
  {
    name: "email",
    type: "email",
    icon: faUser,
    placeholder: "Ingrese correo electrónico",
  },
  {
    name: "password",
    type: "password",
    icon: faKey,
    placeholder: "Ingrese contraseña",
  },
];
const buttonLogin: { title: string; rounded: string } = {
  title: "Ingresar",
  rounded: "rounded-xl",
};
//funcion envio sesion
const submitLogin = async () => {
  try {
    const authResponse = await login(formLogin);
    authResponse.role === "ADMINISTRADOR"
      ? navigateTo("/admin")
      : navigateTo("/");
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
  }
};
</script>
