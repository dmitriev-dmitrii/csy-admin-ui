import products from "./products.ts";
import users from "./users.ts";
import {createStore} from "vuex";
import auth from "./auth.ts";
const storeModules = {
    state: {

    },
    getters:{

    },

    mutations: {

    },

    actions: {

    },
    modules: {
        auth,
        users,
        products,

    }
}

export default  createStore(storeModules)