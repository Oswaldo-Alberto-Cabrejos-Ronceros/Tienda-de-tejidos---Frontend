<template>
  <form
    @submit.prevent="submitRegister"
    class="flex flex-1 flex-col w-[40vw] min-w-56 max-w-96 text-zinc-800 justify-center items-center gap-4 justify-self-center"
  >
    <h3 class="text-2xl font-semibold">Registro de Usuario</h3>
    <InputPrimary
      v-for="input in inputsRegister"
      :name="input.name"
      :type="input.type"
      :icon="input.icon"
      :placeholder="input.placeholder"
      v-model="formRegister[input.name]"
    />
    <ButtonPrimary :title="buttonLoginTitle" />
  </form>
</template>

<script lang="ts" setup>
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import type { RegisterForm } from "~/interfaces/auth";
//
//para formulario registro
const formRegister = reactive<RegisterForm>({
  email: "",
  first_name: "",
  last_name: "",
  phone: "",
  password: "",
  confirm_password: "",
});
const inputsRegister: {
  name: keyof RegisterForm;
  type: string;
  icon: any;
  placeholder: string;
}[] = [
  {
    name: "first_name",
    type: "text",
    icon: faUser,
    placeholder: "Ingrese Nombres",
  },
  {
    name: "last_name",
    type: "text",
    icon: faUser,
    placeholder: "Ingrese Apellidos",
  },
  {
    name: "email",
    type: "email",
    icon: faEnvelope,
    placeholder: "Ingrese Correo",
  },
  {
    name: "phone",
    type: "cel",
    icon: faMobile,
    placeholder: "Ingrese Celular",
  },
  {
    name: "password",
    type: "password",
    icon: faKey,
    placeholder: "Ingrese Contraseña",
  },
  {
    name: "confirm_password",
    type: "password",
    icon: faKey,
    placeholder: "Repita Contraseña",
  },
];
const buttonLoginTitle: string = "Registrar";
//funcion para comprobar que los password sean iguales
const checkPassword = () => {
  return formRegister.password === formRegister.confirm_password;
};
//funcion para enviar el formulario
const submitRegister = () => {
  const passwordEquals: boolean = checkPassword();
  if (passwordEquals) {
    const authStore = useAuthStore();
    authStore.register(formRegister);
  } else {
    alert("Las contraseñas debe ser iguales");
  }
};
onMounted(() => {
  navigateTo("/auth/login");
});
</script>

<style></style>
