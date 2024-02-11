
import MainPage from "../pages/MainMage.vue";
import Error from "../pages/ErrorPage.vue";
import productsRoutes from "./productsRoutes.ts";

import {LayoutsMap} from "../constats/LayoutsMap.ts";
import {createRouter, createWebHistory} from "vue-router";
import authRoutes from "./authRoutes.ts";
import authMiddleware from "./middlewares/authMiddleware.ts";

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
  console.log(to)

  // if (to.name !== 'login' ) {
  //   return next({name : 'login'})
  // }

  // if (to.meta.middleware) {
  //
  // }

  return next();
});

export default router ;
