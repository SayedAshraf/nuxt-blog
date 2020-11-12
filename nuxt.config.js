export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - Nuxt Blog',
    title: 'HomePage',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/style/base.scss'],

  loading: {
    color: 'black',
    height: '5px',
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/plugintest.server.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // router: {
  //   extendRoutes(routes, resolve) {
  //     routes.push({
  //       name: 'blog',
  //       path: '/asd',
  //       component: resolve(__dirname, 'pages/blog.vue'),
  //     })
  //   },
  // },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://jsonplaceholder.typicode.com',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
