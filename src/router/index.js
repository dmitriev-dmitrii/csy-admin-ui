import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/views/Main.vue";
import Error from "@/views/Error.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },

  {
    path: "*",
    name: "Error",
    component: Error,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
