import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import { md } from './plugins/md.js'
// import { demo } from './plugins/demo.js'
import fs from 'fs'
import {baseParse} from '@vue/compiler-core'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), md()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  },
  server: {
    open: 'http://localhost:5173/'
  },
  
})
