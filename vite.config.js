import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { readFile, writeFile } from 'fs/promises'
import { resolve } from 'path'

// Vite plugin: after build, defer non-critical CSS (eliminates render-blocking link)
function deferCssPlugin() {
  return {
    name: 'defer-css',
    apply: 'build',
    async closeBundle() {
      const htmlPath = resolve('dist/index.html')
      try {
        let html = await readFile(htmlPath, 'utf8')
        // Convert blocking <link rel="stylesheet"> CSS to deferred (media print trick)
        // Skip already-async links
        html = html.replace(
          /<link rel="stylesheet"([^>]*) href="(\/assets\/[^"]+\.css)"([^>]*)>/g,
          (match, before, href, after) => {
            if (match.includes('media=')) return match // already deferred
            return `<link rel="preload" as="style" href="${href}"><link rel="stylesheet"${before} href="${href}"${after} media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="${href}"></noscript>`
          }
        )
        await writeFile(htmlPath, html, 'utf8')
        console.log('[defer-css] CSS links deferred successfully')
      } catch (e) {
        console.warn('[defer-css] Failed:', e.message)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|gif|tiff|svg)$/i,
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
    deferCssPlugin(),
  ],
  server: {
    port: 5188,
  },
  esbuild: {
    drop: ['console', 'debugger'],
    legalComments: 'none',
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
            if (id.includes('react-dom') || id.includes('/react/')) {
              return 'vendor'
            }
            if (id.includes('react-router')) {
              return 'router'
            }
          }
        },
      },
    },
  },
})
