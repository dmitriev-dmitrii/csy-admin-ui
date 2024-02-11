import { createApp } from 'vue'
import App from './App.vue'
import storeModules from "./store";
import routes from "./router";
import {createStore} from "vuex";
import { globalCookiesConfig } from "vue3-cookies";
import { createVuetify } from 'vuetify'
// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// Vuetify

import './api/config/authInterceptors.ts'

import {createRouter, createWebHistory} from "vue-router";
import VueCookies from 'vue3-cookies'

globalCookiesConfig({
    expireTimes: "30d",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None",
});
const vuetify = createVuetify({
    components,
    directives
})
export const store = createStore(storeModules)

const router = createRouter({
    // mode: 'history',
    history : createWebHistory(),
    routes : routes
})


createApp(App).use(store).use(router).use(vuetify).use(VueCookies).mount('#app')


