// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/svg-sprite',
    '@pinia/nuxt',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/eslint-module',
    ['@nuxtjs/google-fonts', {
      families: {
        'PT+Sans': true
      },
      subsets: 'cyrillic'
    }]
  ],
  svgSprite: {
    // manipulate module options
  },
  css: [
    '~/assets/css/variables.css'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/sass-variables.scss";'
        }
      }
    }
  },
  devServer: {
    host: '0.0.0.0'
  }
});
