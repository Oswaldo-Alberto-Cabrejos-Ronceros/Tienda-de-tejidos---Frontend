import { defineStore } from "pinia";
import type {
  LoginResponse,
  RefreshResponse,
  RegisterForm,
} from "~/interfaces/auth";
import { useUserStore } from "./useUserStore";
import type { Usuario } from "~/interfaces/Usuario";
import type { AuthResponse } from "~/services/Authentication/domain/models/AuthResponse";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isAdmin: null as boolean | null,
    user: null as null | AuthResponse,
  }),
  getters: {
    userRole: (state) => state.user?.role || null,
    userId: (state) => state.user?.id || null,
  },
  actions: {
    recoverUserFromSession() {
      const user = sessionStorage.getItem("user");
      if (user) {
        try {
          this.user = JSON.parse(user) as AuthResponse;
        } catch (error) {
          console.error(
            "Error al parsear el usuario desde sessionStorage",
            error
          );
        }
      } else {
        this.user = null;
        console.warn("No existe usuario en sessionStorage");
      }
    },
    setUser(user: AuthResponse) {
      this.user = user;
      user.role === "ADMINISTRADOR"
        ? (this.$state.isAdmin = true)
        : (this.$state.isAdmin = false);
      //saved in session storage
      sessionStorage.setItem("user", JSON.stringify(user));
    },
    cleanUser() {
      this.user = null;
      sessionStorage.removeItem("user");
    },
    //registro
    async register(request: RegisterForm) {
      const config = useRuntimeConfig();
      try {
        const { user } = await $fetch<LoginResponse>(
          `${config.public.apiBase}/auth/register/`,
          {
            method: "POST",
            body: {
              email: request.email,
              first_name: request.first_name,
              last_name: request.last_name,
              phone: request.phone,
              password: request.password,
              role: "client",
            },
            credentials: "include",
          }
        );
        if (user) {
          const userStore = useUserStore();
          userStore.setUserData(user as Usuario);
          navigateTo("/");
        }
      } catch (error) {
        console.log("Error al registrar");
      }
    },
    //login
    async login(email: string, password: string) {
      const config = useRuntimeConfig();
      try {
        const { user } = await $fetch<LoginResponse>(
          `${config.public.apiBase}/auth/login/`,
          {
            method: "POST",
            body: {
              email: email,
              password: password,
            },
            credentials: "include",
          }
        );
        if (user) {
          const userStore = useUserStore();
          userStore.setUserData(user as Usuario);
          navigateTo("/");
        }
      } catch (error) {
        console.error("Credenciales incorrectas", error);
        alert("Credenciales incorrectas");
      }
    },
    //refrescar token
    async refreshingToken() {
      const config = useRuntimeConfig();
      try {
        await $fetch<RefreshResponse>(
          `${config.public.apiBase}/auth/token/refresh/`,
          { method: "POST", credentials: "include" }
        );
      } catch (error) {
        this.logout();
        console.error("Error al refrescar token", error);
      }
    },
    //cerrar sesion
    async logout() {
      const config = useRuntimeConfig();
      //eliminamos las coockies
      const userStore = useUserStore();
      //limpiamos session storange
      userStore.cleanUserData();
      //eliminamos cookies
      //analizar si se usa fetch o instancia de axios
      try {
        const { message } = await $fetch<{ message: string }>(
          `${config.public.apiBase}/auth/logout/`,
          {
            method: "POST",
            credentials: "include",
          }
        );
        console.log(message);
      } catch (error) {
        console.log(
          "Error al cerrar sesion, no se encontraron las cookies",
          error
        );
      }
      //para admin
      this.removeIsAdmin();
      //redirigimos al login
      navigateTo("/");
    },
    async setIsAdmin() {
      //instancia de axios
      const { $api } = useNuxtApp();
      //peticion
      try {
        const response = await $api.get<{ isAdmin: string }>("/auth/is_admin/");
        //guardamos en state
        console.log(response.data);
        //obtenemos is_admin de token
        const isAdmin = useCookie("is_admin");
        console.log("llamada al backend");
        this.isAdmin = Boolean(isAdmin.value);
      } catch (e) {
        console.error("Error al hacer la peticion para isAdmin");
      }
    },
    //para recuperar de sessionStorange
    recoverIsAdmin() {
      const recoverIsAdmin = useCookie("is_admin");
      console.log("recuperado");
      if (recoverIsAdmin.value) this.isAdmin = Boolean(recoverIsAdmin);
    },
    //para remover isAdmin
    removeIsAdmin() {
      const isAdmin = useCookie("is_admin");
      isAdmin.value = null;
      this.isAdmin = null;
    },
  },
});
