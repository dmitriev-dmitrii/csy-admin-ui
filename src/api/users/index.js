import axios from "axios";
import {useCookies} from "vue3-cookies";
const USER_AUTH_ACCESS_TOKEN_HEADER = 'csy-auth'

const apiConfig = {
    withCredentials:true,
    baseURL:'http://localhost:4000/api/users',

}
const userApi = axios.create(apiConfig)

const { cookies } = useCookies();

const setAuthTokenCooke = ({accessToken})=> {
    cookies.set("accessToken",accessToken,);
}

const authRequestInterceptor = (req)=>{
    req.headers[USER_AUTH_ACCESS_TOKEN_HEADER] = cookies.get("accessToken")
    return req
}
let errCounter = 0
async function authResponseInterceptor (err) {

    const {response} = err
    const {status} = response

    if (status === 401 && err?.config  ) {

        console.log(err?.config)

            if (errCounter < 2 ) {
                errCounter++
                const data = await   updateUserRefreshToken()
                setAuthTokenCooke(data.tokens)

               return  await userApi.request(err.config);
            }

    }
    throw err;
}
userApi.interceptors.response.use(
    (res) => {return res},
    authResponseInterceptor
)
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
        cookies.remove('accessToken')

        return data
    }
    catch (err) {
        console.log(err)
    }

}
const updateUserRefreshToken = async ()=> {
    try {

        const {data} = await  userApi.get('/refresh-token',{hui:true})
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
    updateUserRefreshToken,
}
export default usersApi