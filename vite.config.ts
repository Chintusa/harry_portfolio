import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default defineConfig({
  // GitHub Pages uses the repository name as the base path.
  // Netlify serves from the root.
  base: process.env.GITHUB_ACTIONS ? '/harry_portfolio/' : '/',

  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 5173,
  },

  preview: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 4173,
  },
})
