import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // the three.js / WebGL chunk is lazy-loaded, so its size is expected
    chunkSizeWarningLimit: 900,
  },
})
