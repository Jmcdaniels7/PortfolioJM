import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   base: '/PortfolioJM/', 
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',  // your Spring Boot backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
