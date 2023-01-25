
import Home from "@/views/Home.vue";
import Error from "@/views/Error.vue";
import ProductsRoutes from "./products";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: '/:pathMatch(.*)*',
    name: "Error",
    component: Error,
  },
];

export default  [...ProductsRoutes,...routes];
