import products from "./products";
import users from "./users";
import {createStore} from "vuex";
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
        users,
        products,
    }
}

export default  createStore(storeModules)