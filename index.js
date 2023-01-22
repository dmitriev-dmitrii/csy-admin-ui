import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router"


import App from "./src/App.vue";
import routes from "@/router";
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

const router = createRouter({
    history : createWebHistory(),
    routes : routes
})

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(router).use(vuetify).mount('#app')