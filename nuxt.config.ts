export default defineNuxtConfig({
  ssr: false,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/svg-sprite',
    '@pinia/nuxt',
    '@nuxtjs/eslint-module',
    ['@nuxtjs/google-fonts', {
      families: {
        'PT+Sans': true
      },
      subsets: 'cyrillic'
    }],
    '@element-plus/nuxt'
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
  },
  runtimeConfig: {
    public: {
      USE_FAKE_BACKEND: process.env.USE_FAKE_BACKEND === '1'
    }
  }
});
