import axios from "axios";
export default {
    namespaced: true,
    state: {

    },

    getters:{

    },

    mutations: {

    },

    actions: {
        async  createProduct (context,payload) {
            try{
                await  axios.post('http://localhost:3000/api/catalog/products/',payload)

                // context.commit('setProductsList',res.data)
            } catch (err) {
                console.log(err)
            }

        },
    },

}

