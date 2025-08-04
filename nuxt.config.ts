import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss(), require("vite-svg-loader")()],
  },
  modules: ["@pinia/nuxt", "@vueuse/nuxt"],
  runtimeConfig: {
    public: {
      apiBase: process.env.URL_BASE,
    },
  },
});
