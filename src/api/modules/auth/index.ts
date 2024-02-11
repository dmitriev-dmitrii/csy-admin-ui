import axiosInherit from "axios-inherit";
import axios from "axios";
import {useCookies} from "vue3-cookies";
import {USER_ACCESS_TOKEN_COOKIE_KEY} from "../../../constats/appCookiesKeys.ts";

const { cookies } = useCookies();

const setAuthTokenCooke = ({accessToken=''})=> {
    cookies.set(USER_ACCESS_TOKEN_COOKIE_KEY,accessToken);
}

const authApiInstance = axiosInherit(axios)
authApiInstance.defaults.baseURL = 'http://localhost:4000/api/users'
const userRegistration = async (payload = { })=> {
    try {
        const {data} = await  authApiInstance.post('/registration', payload, )
        setAuthTokenCooke(data.tokens)

        return data
    }
    catch (err) {
        console.log(err)
    }
}

const userLogin = async (payload = { })=> {
    try {
        const {data} = await  authApiInstance.post('/login', payload)
        setAuthTokenCooke(data.tokens)

        return data
    }
    catch ({response}) {


    }
}

const userLogout = async (payload = { })=> {
    try {
        const {data} = await  authApiInstance.post('/logout',payload)
        cookies.remove(USER_ACCESS_TOKEN_COOKIE_KEY)

        return data
    }
    catch (err) {
        console.log(err)
    }

}
const userUpdateAuthTokens = async (config = {isRetryRefreshAuthTokens : false})=> {
    try {

        const {data} = await  authApiInstance.get('/refresh-token',config)
        setAuthTokenCooke(data.tokens)

        return data
    }
    catch (err) {
    }
}

const usersApi = {
    userRegistration,
    userLogin,
    userLogout,
    userUpdateAuthTokens,
}
export default usersApi