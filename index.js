import { createApp } from "vue";
import { createStore } from 'vuex'
import { createRouter, createWebHistory } from "vue-router"

import App from "./src/App.vue";
import storeModules from "@/store";
import routes from "@/router";

export const store = createStore(storeModules)

const router = createRouter({
    history : createWebHistory(),
    routes : routes
})


import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App).use(store).use(router).use(vuetify).mount('#app')