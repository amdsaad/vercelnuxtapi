export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/scss/admin-api.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/auth-next", "@nuxtjs/axios"],
  /*
   ** Build configuration
   */

  auth: {
    redirect: {
      login: "/",
      callback: "/profile",
      logoutRedirectUri: "http://localhost:3000",
    },
    strategies: {
      local: false,
      auth0: {
        scheme: "oauth2",
        domain: "amdsaad.us.auth0.com",
        clientId: "AxExiXY1zcTbjuF94BNDmXr8nWk4xZMR",
      },
    },
  },
  build: {
    transpile: /@fullcalendar.*/, // transpile ESM modules within all fullcalendar packages
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
