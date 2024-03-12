import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import {config} from "dotenv";

const env = config().parsed
const {APP_PORT,USERS_API_URL} = env

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
      port: APP_PORT,
    },
    preview: {
      port: APP_PORT,
    },
  }

  // if (command === 'serve') {
  //
  // }

 return  config
})

