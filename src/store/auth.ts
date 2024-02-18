import authApi from "../api/modules/auth";
import {defineStore} from "pinia";
import _pick from "lodash/pick";

const {userRegistration,userLogout,userLogin,userUpdateAuthTokens} = authApi

// interface User {
//     id :string;
//     login :string;
//     email  :string;
//     createdAt : string;
//     updatedAt  : string;
// }


const defaultUserData =  {
        id :'' ,
        login :'' ,
        email  :'',
        createdAt : '',
        updatedAt  : '' ,
}

export const useAuthStore = defineStore('auth', {
    state: () => ({ user: defaultUserData }) ,

    getters:{
        isAuthenticated:({user})=> Boolean(user.id),
    },

    actions: {
        updateUser (payload = defaultUserData) {
            this.user =   _pick(payload, Object.keys(this.user))
        },
        async login ({email = '',login = '',password = ''}){

            const user =    await userLogin({email,login,password})
            this.updateUser( user )

        },

        async registration ({email = '',login = '',password = ''}){
            const user =    await userRegistration({email,login,password})
            this.updateUser( user)
        },

        async refreshAuthTokens (){
            try {
                const user =   await  userUpdateAuthTokens(true)
                this.updateUser( user )
            }catch (e) {
                this.updateUser()
            }
        },

        async  logout (){
            await  userLogout()
            this.updateUser()
        },
    }
})
