import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      // Skip WebP — already pre-optimized
      webp: false,
      // PNG optimization
      png: {
        quality: 80,
      },
      // JPEG optimization
      jpeg: {
        quality: 75,
      },
      // JPG optimization
      jpg: {
        quality: 75,
      },
    }),
  ],
  server: {
    port: 5188,
  },
  build: {
    // Enable CSS code splitting for better caching
    cssCodeSplit: true,
    // Optimize CSS minification
    cssMinify: true,
    // Improve chunk splitting
    rollupOptions: {
      output: {
        // Split vendor JS for better caching
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom') || id.includes('react') || id.includes('react-router-dom')) {
              return 'vendor'
            }
          }
        },
      },
    },
  },
})
