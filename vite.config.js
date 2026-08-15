import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// Custom plugin to inline entry CSS into index.html to eliminate render-blocking CSS requests
function inlineEntryCss() {
  return {
    name: 'inline-entry-css',
    apply: 'build',
    enforce: 'post',
    generateBundle(options, bundle) {
      let entryCssKey = null
      let entryCssContent = ''

      for (const [fileName, asset] of Object.entries(bundle)) {
        if (fileName.endsWith('.css') && fileName.includes('index-')) {
          entryCssKey = fileName
          entryCssContent = asset.source
          break
        }
      }

      if (entryCssKey && bundle['index.html']) {
        const htmlAsset = bundle['index.html']
        if (typeof htmlAsset.source === 'string') {
          // Replace link rel="stylesheet" pointing to entryCssKey with inline style
          // Regex handles both absolute (/assets/...) and relative (./assets/...) paths
          const linkRegex = new RegExp(`<link[^>]*href="[^"]*${entryCssKey.replace(/.*[/\\]/, '')}"[^>]*>`, 'i')
          htmlAsset.source = htmlAsset.source.replace(
            linkRegex,
            `<style>${entryCssContent}</style>`
          )
          // Remove the external file so it's not downloaded separately
          delete bundle[entryCssKey]
        }
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
      png: { quality: 80 },
      jpeg: { quality: 75 },
      jpg: { quality: 75 },
    }),
    inlineEntryCss(),
  ],
  server: {
    port: 5188,
  },
  esbuild: {
    drop: ['console', 'debugger'],
    legalComments: 'none',
  },
  build: {
    cssCodeSplit: true,
    cssMinify: true,
    rollupOptions: {
      output: {
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
