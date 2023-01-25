
import Welcome from "@/views/Welcome.vue";
import Error from "@/views/Error.vue";
import ProductsRoutes from "./products";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },

  {
    path: '/:pathMatch(.*)*',
    name: "Error",
    component: Error,
  },
];

export default  [routes,...ProductsRoutes];
