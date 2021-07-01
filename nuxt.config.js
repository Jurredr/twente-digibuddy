import i18n from './assets/config/i18n'

const description = 'Putting digital Twente on the map!'
const title = 'Twente Digibuddy'
const image = ''
const imageWidth = 0
const imageHeigth = 0

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Twente, Digital, Digibuddy',
      },
      {
        hid: 'subject',
        name: 'subject',
        content: 'Data Technology',
      },
      {
        hid: 'language',
        name: 'language',
        content: 'NL',
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Chris & Jurre',
      },

      // OpenGraph tags
      {
        hid: 'og:title',
        property: 'og:title',
        content: title,
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: '',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: image,
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: image,
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: imageWidth,
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: imageHeigth,
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: title,
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },

      // Twitter Card tags
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@JurredeRuiter',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: title,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: image,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/gmap.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://i18n.nuxtjs.org/
    'nuxt-i18n',
  ],

  // Server Middleware
  serverMiddleware: {
    '/api': '~/api',
  },

  // i18n module configuration: https://i18n.nuxtjs.org/
  i18n: {
    vueI18nLoader: true,
    defaultLocale: 'nl',
    locales: [
      {
        code: 'nl',
        name: 'Nederlands',
      },
      {
        code: 'en',
        name: 'English',
      },
    ],
    vueI18n: i18n,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^gmap-vue($|\/)/],
  },
}
