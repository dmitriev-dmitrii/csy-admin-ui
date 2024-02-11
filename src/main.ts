import { createApp } from 'vue'
import App from './App.vue'
import store from "./store";
import router from "./router";

// Vuetify
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// Vuetify

import VueCookies from 'vue3-cookies'

const cookiesConfig = {
    expireTimes: "30d",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None",
};

// globalApiInterceptor
import './api/config/interceptors.ts'


const vuetify = createVuetify({
    components,
    directives
})


createApp(App).use(store).use(router).use(vuetify).use(VueCookies,cookiesConfig).mount('#app')


