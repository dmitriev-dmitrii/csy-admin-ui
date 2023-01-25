
import Welcome from "@/views/Welcome.vue";
import Error from "@/views/Error.vue";
import ProductsList from "@/views/Products/List.vue";
import ProductsCreate from "@/views/Products/Create.vue";
import ProductsEdit from "@/views/Products/Edit.vue";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/products",
    name: "ProductsList",
    component: ProductsList,
    children: [

      {
        path: ':id',
        name: 'ProductsCreateEdit',
        component: ProductsEdit,
      }
    ]
  },
  {
    path: '/products/create',
    name: 'ProductsCreate',
    component: ProductsCreate,
  },
  {
    path: '/:pathMatch(.*)*',
    name: "Error",
    component: Error,
  },
];

export default routes;
