import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/

export default defineConfig(({ command, mode, isSsrBuild, isPreview })=>{
  const config = {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      port: 5000,
    },
    preview: {
      port: 5000,
    },
  }

  // if (command === 'serve') {
  //
  // }

 return  config
})

