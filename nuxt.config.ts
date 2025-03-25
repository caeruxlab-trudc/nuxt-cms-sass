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
    apiParty: {
      endpoints: {
        cms: {
          url: process.env.CMS_API_ENDPOINT!,
          headers: {
            Authorization: `Basic ${globalThis.btoa(`${process.env.CMS_API_USERNAME}:${process.env.CMS_API_PASSWORD}`)}`,
            'X-MICROCMS-API-KEY': process.env.CMS_API_TOKEN!,
          }
        },
      }
    }
  },

  modules: ['@nuxt/image', 'nuxt-api-party'],
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