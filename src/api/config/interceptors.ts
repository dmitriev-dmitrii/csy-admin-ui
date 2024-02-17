import axios, {AxiosError} from "axios";
import axiosInherit from 'axios-inherit'
import authApi from '../modules/auth'


const {userUpdateAuthTokens} = authApi

const apiConfig = {
    // todo добавить в интерфейс аксиоса  поле isRetryRefreshAuthTokens
    isRetryRefreshAuthTokens: false , //была ли попытка обновления рефреш токенов через интерцептор при 401 ошибке
    withCredentials:true,
}

axios.defaults = Object.assign(axios.defaults,apiConfig)


async function responseErrInterceptor (err) {

    const {response, config} = err
    const {status} = response

    if (status === 401 && !config.isRetryRefreshAuthTokens) {
        config.isRetryRefreshAuthTokens = true

        await  userUpdateAuthTokens(true)

        return   await axios.request(config);
    }

    return err
}

async function responseInterceptor ({data}) {
    return data
}

axios.interceptors.response.use(responseInterceptor,responseErrInterceptor)

 axiosInherit(axios) //либа-костыль, чтобы наследовать интерцепторы глобально
