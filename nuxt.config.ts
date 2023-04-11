// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Nuxt 3 Vuetify 3 sample",
      titleTemplate: "%s | Nuxt 3 Vuetify 3 sample",
    },
  },
  css: ["vuetify/lib/styles/main.sass", '@mdi/font/css/materialdesignicons.css'],
  build: {
    transpile: ["vuetify"],
  },
})
