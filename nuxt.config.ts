// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@vueuse/motion/nuxt'
  ],
  
  nitro: {
    experimental: {
      wasm: false
    },
    hooks: {
      'rollup:before': (nitro) => {
        // Workaround for Nuxt 3.20.0 bug: client.precomputed.mjs is not generated
        // This hook creates the missing file before Nitro tries to load it
        const fs = require('fs')
        const path = require('path')
        const precomputedPath = path.join(nitro.options.buildDir, 'dist', 'server', 'client.precomputed.mjs')
        const dir = path.dirname(precomputedPath)
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true })
        }
        if (!fs.existsSync(precomputedPath)) {
          fs.writeFileSync(precomputedPath, 'export default {};')
        }
      }
    }
  }
})
