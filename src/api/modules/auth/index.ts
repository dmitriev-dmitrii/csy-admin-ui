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
        const res = await  authApiInstance.post('/registration', payload, )
        const {tokens} = res
        setAuthTokenCooke(tokens)

        return res
    }
    catch (err) {
        console.log(err)
    }
}

const userLogin = async (payload = { })=> {
    try {
        const res = await  authApiInstance.post('/login', payload)
        const {tokens} = res
        setAuthTokenCooke(tokens)

        return res
    }
    catch ({response}) {


    }
}

const userLogout = async (payload = { })=> {
    try {
        const res = await  authApiInstance.post('/logout',payload)
        cookies.remove(USER_ACCESS_TOKEN_COOKIE_KEY)

        return  res
    }
    catch (err) {
        console.log(err)
    }

}
const userUpdateAuthTokens = async (config = {isRetryRefreshAuthTokens : false})=> {
    try {

        const res = await  authApiInstance.get('/refresh-token',config)
        const {tokens} = res
        setAuthTokenCooke(tokens)

        return res
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