

// const axiosUsersApiInstance = axios.create({
//     baseURL: 'http://localhost:4000/api/users/',
//     url:'auth',
//     timeout: 1000,
//     // headers: {'X-Custom-Header': 'foobar'}
// });

import axiosUsersApiInstance from "@/api/modules/users/axiosUsersApiInstance";

export const userRegistration = async (payload = { })=> {

        return  await  axiosUsersApiInstance.post('/auth/registration', payload, )

}

export const userLogin = async (payload = { })=> {

      return   axiosUsersApiInstance.post('/auth/login', payload)

}

export const userLogout = async (payload = { })=> {

   return  await  axiosUsersApiInstance.post('/auth/logout',payload)

}
export const userUpdateAuthTokens = async (isRetryRefreshAuthTokens = false )=> {
    // @ts-ignore
 return   await  axiosUsersApiInstance.put('/auth/refresh-tokens',{} ,{isRetryRefreshAuthTokens} )
}

export default {
    userRegistration,
    userLogin,
    userLogout,
    userUpdateAuthTokens,
}