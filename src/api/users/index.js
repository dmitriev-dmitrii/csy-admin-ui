import axios from "axios";
import {useCookies} from "vue3-cookies";
const USER_AUTH_ACCESS_TOKEN_HEADER = 'csy-auth'
const abc = axios.create({
    withCredentials:true,
    baseURL:'http://localhost:4000/api/users',

})

const { cookies } = useCookies();
const setAuthTokenCooke = ({accessToken})=> {
    cookies.set("accessToken",accessToken,1);
}

const authRequestInterceptor = (req)=>{
   req.headers[USER_AUTH_ACCESS_TOKEN_HEADER] = cookies.get("accessToken")
   return req
}
const resAuthHandle = async (error) => {
    const originalRequest = error.config;
    console.log(error.response.status)
    // if (error.response.status == 401 && error.config && !error.config._isRetry) {
    //     originalRequest._isRetry = true;
    //     try {
    //         const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
    //         localStorage.setItem('token', response.data.accessToken);
    //         return $api.request(originalRequest);
    //     } catch (e) {
    //         console.log('НЕ АВТОРИЗОВАН')
    //     }
    // }
    throw error;
}

abc.interceptors.response.use((config) => config,resAuthHandle)
abc.interceptors.request.use(authRequestInterceptor)

const userRegistration = async (payload = { })=> {
    try {
        const {data} = await  abc.post('/registration', payload, )
        setAuthTokenCooke(data.tokens)
        console.log(data)
        return data
    }
    catch (err) {
        console.log(err)
    }
}

const userLogin = async (payload = { })=> {
    try {
        const {data} = await  abc.post('/login', payload)
        setAuthTokenCooke(data.tokens)
        console.log(data)
        return data
    }
    catch ({response}) {

        console.log(response)
    }
}

const userLogout = async (payload = { })=> {
    try {
        const {data} = await  abc.post('/logout',payload)
        cookies.remove('accessToken')
        console.log(data)
        return data
    }
    catch (err) {
        console.log(err)
    }

}
const userRefreshToken = async ()=> {
    try {
        console.log(    cookies.get('accessToken'))
        const {data} = await  abc.get('/refresh-token')
        setAuthTokenCooke(data.tokens)
        console.log(data)
        return data
    }
    catch (err) {
        console.log(err.response)
    }

}
const getUsers = async (params = { })=> {
    try {

        const {data} = await  abc.get('/',params)
        console.log(data)
        return data
    }
    catch (err) {
        console.log(err)
    }
}

const usersApi = {
    userRegistration,
    userLogin,
    userLogout,
    getUsers,
    userRefreshToken,
}
export default usersApi