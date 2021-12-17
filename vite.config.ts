import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

const resolve = (dir: string) => path.resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vv3/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('./src')
    },
  }
})
