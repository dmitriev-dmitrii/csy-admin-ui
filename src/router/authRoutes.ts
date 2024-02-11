import LoginPage from "../pages/LoginPage.vue";
import {LayoutsMap} from "../constats/LayoutsMap.ts";


export default [
   {
        path: "/login",
        name: "login",
        component: LoginPage,
        meta:{
            layout: LayoutsMap.AUTH_LAYOUT
        }
   }
]