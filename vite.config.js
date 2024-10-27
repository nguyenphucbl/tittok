import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: '[name]__[local]--[hash:base64:5]',
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
