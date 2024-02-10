import axios from "axios";
import {useCookies} from "vue3-cookies";
const USER_AUTH_ACCESS_TOKEN_HEADER = 'csy-auth'
const USER_ACCESS_TOKEN_COOKIE_KEY = 'csy-access'


const apiConfig = {
    isRetryRefreshAuthTokens: false , //была ли попытка обновления рефреш токенов
    isAuthRequired:true, //отправлять ли токены аутификации с запросом
    withCredentials:true,
    baseURL:'http://localhost:4000/api/users',

}

const userApi = axios.create(apiConfig)

const { cookies } = useCookies();

const setAuthTokenCooke = ({accessToken})=> {
    cookies.set(USER_ACCESS_TOKEN_COOKIE_KEY,accessToken);
}

const authRequestInterceptor = (req)=>{

    const {isAuthRequired} = req

    if (isAuthRequired) {
        req.headers[USER_AUTH_ACCESS_TOKEN_HEADER] = cookies.get(USER_ACCESS_TOKEN_COOKIE_KEY)
    }

    return req
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
userApi.interceptors.response.use(null,authResponseInterceptor)
userApi.interceptors.request.use(authRequestInterceptor)

const userRegistration = async (payload = { })=> {
    try {
        const {data} = await  userApi.post('/registration', payload, )
        setAuthTokenCooke(data.tokens)

        return data
    }
    catch (err) {
        console.log(err)
    }
}

const userLogin = async (payload = { })=> {
    try {
        const {data} = await  userApi.post('/login', payload)
        setAuthTokenCooke(data.tokens)

        return data
    }
    catch ({response}) {


    }
}

const userLogout = async (payload = { })=> {
    try {
        const {data} = await  userApi.post('/logout',payload)
        cookies.remove(USER_ACCESS_TOKEN_COOKIE_KEY)

        return data
    }
    catch (err) {
        console.log(err)
    }

}
const userUpdateAuthTokens = async (config = {isRetryRefreshAuthTokens : false})=> {
    try {

        const {data} = await  userApi.get('/refresh-token',config)
        setAuthTokenCooke(data.tokens)

        return data
    }
    catch (err) {
    }
}

const getUsers = async (params = { })=> {
    try {

        const {data} = await  userApi.get('/',params)

        return data
    }
    catch (err) {

    }
}


const usersApi = {
    userRegistration,
    userLogin,
    userLogout,
    getUsers,
    userUpdateAuthTokens,
}
export default usersApi