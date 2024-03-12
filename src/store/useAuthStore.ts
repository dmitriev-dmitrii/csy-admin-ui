import {userRegistration,userLogout,userLogin,userUpdateAuthTokens}from "@/api/modules/users/usersAuthApi";
import _pick from "lodash/pick";
import {ref, computed} from 'vue'



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
        avatarImg:''
}

export    const user =  ref(defaultUserData)
export     const isAuthenticated = computed(()=>!!user.value.id )

    const  updateUser =  (payload = defaultUserData) => {
    //@ts-ignore
    return user.value =   _pick(payload, Object.keys(defaultUserData))

    }
export   const    login =  async ({email = '',login = '',password = ''}) =>{

      const   data =  await userLogin({email,login,password})
      //@ts-ignore
      updateUser(  data  )

    }

export   const  registration =    async ({email = '',login = '',password = ''})=>{
        const  data =    await userRegistration({email,login,password})
     //@ts-ignore
        updateUser(  data)
    }

export   const  refreshAuthTokens =     async  ()=>{
        try {
            const data =   await  userUpdateAuthTokens(true)
            //@ts-ignore
            return  updateUser( data )
        }catch (e) {
             updateUser()
        }
    }

export   const  logout =  async ()=>{
        await  userLogout()

        updateUser()

    }

export  default {
    user,
    isAuthenticated,
    login,
    logout,
    registration,
    refreshAuthTokens,
};