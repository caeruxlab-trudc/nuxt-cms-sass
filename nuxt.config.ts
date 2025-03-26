// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false, 

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  runtimeConfig: {
    public: {
      token: process.env.CMS_API_TOKEN!,
      endpoint: process.env.CMS_API_ENDPOINT!,
    }
  },

  modules: ['@nuxt/image'],
  css: ['~/assets/styles/style.sass'],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "~/assets/styles/mixin.sass" as *\n',
        },
      },
    },
  },
})