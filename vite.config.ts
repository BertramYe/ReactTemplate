import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import autoprefixer from 'autoprefixer'
import pxtorem from 'postcss-pxtorem'
import { nanoid } from 'nanoid'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    cors: true
  },
  plugins: [react()],
  resolve: {
    alias: {
       '@': path.resolve(__dirname, 'src'), // replace src with the @
    }
  },
  css: {
    modules: {
      generateScopedName: '[hash:base64:8]'
    },
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            'Android 4.1',
            'iOS 7.1',
            'Chrome > 31',
            'ff > 31',
            'ie >= 8',
            'last 10 versions'
          ]
        }),
        pxtorem({
          rootValue: 75,
          propList: ['*'],
          unitPrecision: 5
        })
      ]
    }
  },
  build: {
    rollupOptions: { // use rollup to build the project and faster the building
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: `static/[ext]/[name]-${nanoid(16)}-[hash].[ext]`
      }
    }
  }
})
