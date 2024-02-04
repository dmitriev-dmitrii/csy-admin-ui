import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/

export default defineConfig(({ command, mode, isSsrBuild, isPreview })=>{
  let config = {
    plugins: [vue()],
    server: {
      port: 5000,
    },
    preview: {
      port: 5000,
    },
  }

  if (command === 'serve') {

  }

 return  config
})

