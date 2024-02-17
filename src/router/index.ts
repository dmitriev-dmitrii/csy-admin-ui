
import MainPage from "../pages/MainMage.vue";
import Error from "../pages/ErrorPage.vue";
import productsRoutes from "./productsRoutes.ts";
import authRoutes from "./authRoutes.ts";
import {LayoutsMap} from "../constats/LayoutsMap.ts";
import {createRouter, createWebHistory} from "vue-router";

import store from "../store";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainPage,
    meta:{
      layout: LayoutsMap.DEFAULT_LAYOUT
    }
  },
  ...productsRoutes,
  ...authRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: "error",
    component: Error,
    meta:{
      layout: LayoutsMap.ERROR_LAYOUT
    }
  },
];

const router = createRouter({
  // mode: 'history',
  history : createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(store.getters['auth/isAuthenticated'])
  //@ts-ignore
  if (!store.getters['auth/isAuthenticated'] && to.name !== 'login' ) {

    return next( { name : 'login',query: { 'redirect-path': from.name === 'login' ?  '/' : from.path } } )
  }

  // if (to.meta.middleware) {
  //
  // }

  return next();
});



export default router ;
