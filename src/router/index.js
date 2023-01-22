
import Welcome from "@/views/Welcome.vue";
import Error from "@/views/Error.vue";
import Products from "@/views/Products.vue";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: '/:pathMatch(.*)*',
    name: "Error",
    component: Error,
  },
];




export default routes;
