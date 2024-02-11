import axios from "axios";
import {useCookies} from "vue3-cookies";
const USER_AUTH_ACCESS_TOKEN_HEADER = 'csy-auth'
const USER_ACCESS_TOKEN_COOKIE_KEY = 'csy-access'
import axiosInherit from 'axios-inherit'
import authApi from '../modules/auth'

const {userUpdateAuthTokens} = authApi

const apiConfig = {
    isRetryRefreshAuthTokens: false , //была ли попытка обновления рефреш токенов
    isAuthRequired:true, //отправлять ли токены аутификации с запросом
    withCredentials:true,
}

axios.defaults = Object.assign(axios.defaults,apiConfig)

const { cookies } = useCookies();

const setAuthTokenCooke = ({accessToken=''})=> {
    cookies.set(USER_ACCESS_TOKEN_COOKIE_KEY,accessToken);
}

const authRequestInterceptor = (axiosReq)=>{

    const {isAuthRequired} = axiosReq

    if (isAuthRequired) {
        axiosReq.headers[USER_AUTH_ACCESS_TOKEN_HEADER] = cookies.get(USER_ACCESS_TOKEN_COOKIE_KEY)
    }

    return axiosReq
}

async function authResponseInterceptor (err) {

    const {response} = err
    const {status} = response

    if (status === 401 && !err.config.isRetryRefreshAuthTokens  ) {

        const data = await   userUpdateAuthTokens({isRetryRefreshAuthTokens:true})

        setAuthTokenCooke(data.tokens)

        await axios.request(err.config);
        return

    }
    throw err;
}

axios.interceptors.response.use(null,authResponseInterceptor)
axios.interceptors.request.use(authRequestInterceptor)



 axiosInherit(axios)
