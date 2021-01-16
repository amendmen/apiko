export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "apiko",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~assets/scss/main.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~plugins/core-components.js",
    { src: "~/plugins/vuelidate.js", ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
    "@nuxtjs/svg-sprite",
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyAdvXRvRJu4Ul7_C9f9I9M0C1vRO0YwiNc",
          authDomain: "apiko-d0a04.firebaseapp.com",
          databaseURL: "apiko-d0a04.firebaseio.com",
          projectId: "apiko-d0a04",
          storageBucket: "apiko-d0a04.appspot.com",
          messagingSenderId: "227324477470",
          appId: "1:227324477470:web:96cbb4b54ecb946ccdae0f"
        },
        services: {
          storage: true,
          database: true
        }
      }
    ]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)

  axios: {
    baseURL:
      process.env.BASE_URL ||
      "https://apiko-d0a04-default-rtdb.europe-west1.firebasedatabase.app",
    credentials: false
  },

  // svg sprite options
  svgSprite: {
    // manipulate module options
    input: "~/assets/images/icons/"
  },

  styleResources: {
    scss: ["./assets/scss/variables.scss"]
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  env: {
    baseUrl:
      process.env.BASE_URL ||
      "https://apiko-d0a04-default-rtdb.europe-west1.firebasedatabase.app",
    fbAPIKey: "AIzaSyAdvXRvRJu4Ul7_C9f9I9M0C1vRO0YwiNc"
  }
};
