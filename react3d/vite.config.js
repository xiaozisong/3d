import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [new react()],
  server: {
    port: 8080,
    hmr: true
  },
})
