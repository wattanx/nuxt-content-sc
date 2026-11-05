// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt Content with Server Components',
    },
  },
  css: ['~/assets/global.css'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/image', '@nuxtjs/tailwindcss'],
  experimental: {
    componentIslands: true,
  },
  nitro: {
    serverAssets: [{ baseName: 'content', dir: './content' }],
    experimental: {
      wasm: true,
    },
  },
  content: {
    experimental: {
      sqliteConnector: 'native',
    },
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
          langs: ['js', 'ts', 'html', 'css', 'vue'],
        },
      },
    },
  },
});
