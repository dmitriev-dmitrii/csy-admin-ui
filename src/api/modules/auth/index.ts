import axios from "axios";
import axiosInherit from "axios-inherit";



const authApiInstance = axiosInherit(axios)

authApiInstance.defaults.baseURL = 'http://localhost:4000/api/users'
const userRegistration = async (payload = { })=> {

        return  await  authApiInstance.post('/registration', payload, )

}

const userLogin = async (payload = { })=> {

      return   authApiInstance.post('/login', payload)

}

const userLogout = async (payload = { })=> {

   return  await  authApiInstance.post('/logout',payload)

}
const userUpdateAuthTokens = async (isRetryRefreshAuthTokens = false )=> {
    // @ts-ignore
 return   await  authApiInstance.put('/refresh-token',{} ,{isRetryRefreshAuthTokens} )
}

const usersApi = {
    userRegistration,
    userLogin,
    userLogout,
    userUpdateAuthTokens,
}
export default usersApi