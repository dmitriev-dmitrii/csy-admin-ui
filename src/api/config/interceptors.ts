import axios from "axios";
import {useCookies} from "vue3-cookies";

import axiosInherit from 'axios-inherit'
import authApi from '../modules/auth'
import {USER_ACCESS_TOKEN_COOKIE_KEY} from "../../constats/appCookiesKeys.ts";

const {userUpdateAuthTokens} = authApi

const apiConfig = {
    isRetryRefreshAuthTokens: false , //была ли попытка  обновления рефреш токенов через интерцептор
    withCredentials:true,
}

axios.defaults = Object.assign(axios.defaults,apiConfig)

const { cookies } = useCookies();

const setAuthTokenCooke = ({accessToken=''})=> {
    cookies.set(USER_ACCESS_TOKEN_COOKIE_KEY,accessToken);
}

async function responseErrInterceptor (err) {

    const {response, config} = err
    const {status} = response

    if (status === 401 && !config.isRetryRefreshAuthTokens ) {

        const data = await   userUpdateAuthTokens({isRetryRefreshAuthTokens:true})

        setAuthTokenCooke(data.tokens)

        return   await axios.request(config);

    }
    throw err;
}

async function responseInterceptor (res) {
    console.log(res)
    return res.data
}

axios.interceptors.response.use(null,responseErrInterceptor)

 axiosInherit(axios)
