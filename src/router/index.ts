
import Main from "../views/main.vue";
import Login from "../views/login.vue";
import Error from "../views/error.vue";
import productsRoutes from "./products";
import {LayoutsMap} from "../layouts/enums/LayoutsMap.ts";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
    meta:{
      layout: LayoutsMap.DEFAULT_LAYOUT
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta:{
      layout: LayoutsMap.AUTH_LAYOUT
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: "error",
    component: Error,
    meta:{
      layout: LayoutsMap.ERROR_LAYOUT
    }
  },
];

export default  [...productsRoutes,...routes];
