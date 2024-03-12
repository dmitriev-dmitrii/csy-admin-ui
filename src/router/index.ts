
import MainPage from "../pages/MainPage.vue";

import authRoutes from "./authRoutes.ts";
import usersRoutes from "./usersRoutes.ts";

import {createRouter, createWebHistory} from "vue-router";

import {unref} from "vue";
import {isAuthenticated} from "@/store/useAuthStore";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainPage,
  },
  ...authRoutes,
  ...usersRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: "error",
    component: () => import('../pages/ErrorPage.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})


// @ts-ignore
router.beforeEach((to, from, next) => {

  if (!unref(isAuthenticated) && to.name !== 'login' ) {

    return next( { name : 'login',query: { 'redirect-path': to.name === 'login' ?  '/' : to.path } } )
  }

  return next();
});



export default router ;
