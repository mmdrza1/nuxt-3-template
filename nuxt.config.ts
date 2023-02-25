// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "coffee time",
      meta: [
        {
          name: "coffee time shop",
          content: "jayi baraye ghahve khob khordan",
        },
      ],
    },
    pageTransition: {
      name: "page",
      mode: "out-in", // default
    },
    layoutTransition: {
      name: "layout",
      mode: "out-in", // default
    },
  },
  nitro: {},
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/_colors.scss" as *;',
        },
      },
    },
  },
  modules: ["@pinia/nuxt"],

  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  },
});
