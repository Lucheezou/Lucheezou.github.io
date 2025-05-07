import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',  // This ensures assets are loaded correctly with relative paths
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-pdf': ['react-pdf'],
        },
      },
    },
  },
})