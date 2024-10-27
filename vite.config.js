import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
      compilerOptions: {
        customElement: true
      }
    })
  ],
  build: {
        outDir: './dist',
        minify: true,
        sourcemap: false,
        emptyOutDir: true,   

        lib: {
            entry: ['./src/CounterComponent.js'],
            name:'___',
            formats: ['iife'],
            fileName: (format) => `[name].[format].js`
        }
    },
})
