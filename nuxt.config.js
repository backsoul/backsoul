export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  target: 'server',
  ssr: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Backsoul',
    htmlAttrs: {
      lang: 'es',
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",
        rel: "stylesheet"
      }

    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
    src: '~plugins/vuesax.js'
  }, {
    src: '~/plugins/vue-iconsvg.js',
    mode: 'client'
  }, ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/gtm',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAQy6AFXFLWSQu4WrRhOr5DMswWklgFyO0",
          authDomain: "backsoul-87f48.firebaseapp.com",
          projectId: "backsoul-87f48",
          storageBucket: "backsoul-87f48.appspot.com",
          messagingSenderId: "941012190951",
          appId: "1:941012190951:web:3f4d9383f095113afc4442",
          measurementId: "G-C1HHZBPDM8"
        }
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  router: {
    base: '/'
  },
  gtm: {
    id: 'GTM-PWX8DBC',
    pageTracking: true,
    dev: false
  }
}
