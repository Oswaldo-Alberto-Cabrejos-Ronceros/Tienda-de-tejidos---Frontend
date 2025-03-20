import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  devServer:{
    https:{
      key:'./localhost-key.pem',
      cert:'./localhost.pem'
    }
  },
  typescript: {
    strict: true,
  },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss(), require("vite-svg-loader")()],
  },
  modules:['@pinia/nuxt','@vueuse/nuxt'],
  runtimeConfig:{
    public:{
      apiBase:'https://127.0.0.1:8000/'
    }
  }
});
