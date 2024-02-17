import authApi from "../api/modules/auth";
import _pick from 'lodash/pick.js'

const {userRegistration,userLogout,userLogin,userUpdateAuthTokens} = authApi

const defaultUserData =  {
        id :'' ,
        login :'' ,
        email  :'',
        createdAt : '',
        updatedAt  : '' ,
}

export default {
    namespaced: true,

    state: {
        user: defaultUserData
    },

    getters:{
        isAuthenticated:({user})=>{
            return Boolean(user.id)
        }
    },

    mutations: {
        setUserData:(state , userData) => {
            state.user =  _pick(userData, Object.keys(state.user));
        }
    },

    actions: {

        async login ({commit},payload){

            const user =    await userLogin(payload)
            commit('setUserData',user)

          },

        async registration ({commit},{email,login,password}){
                const user =    await userRegistration({email,login,password})
                commit('setUserData',user)
            },

        async refreshAuthTokens ({commit}){
          const user =   await  userUpdateAuthTokens()
            commit('setUserData',user)
        },

        async  logout ({commit}){
         await  userLogout()
         commit('setUserData',defaultUserData)

        },

    }

}

