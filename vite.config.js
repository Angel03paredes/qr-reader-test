import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],server:{
    port:5001
  },base:"https://Angel03paredes.github.io/qr-reader-test/"
})
