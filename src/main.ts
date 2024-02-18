import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import {createPinia} from "pinia";

// Vuetify
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// Vuetify

// globalApiInterceptor
import './api/config/interceptors.ts'
import {useAuthStore} from "./store/auth.ts";

const vuetify = createVuetify({
    components,
    directives
})

const app = createApp(App)
app.use(vuetify)
app.use(createPinia())

const {refreshAuthTokens}  = useAuthStore()
refreshAuthTokens().then(()=>{
    app.use(router)
    app.mount('#app')
})


