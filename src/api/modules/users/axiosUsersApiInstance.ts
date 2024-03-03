import axios from "axios";
import {resErrInterceptor, resInterceptor} from "@/api/modules/users/usersInterceptors";

const axiosUsersApiInstance = axios.create({
    // @ts-ignore
    isRetryRefreshAuthTokens: false , //была ли попытка обновления рефреш токенов через интерцептор при 401 ошибке
    withCredentials:true,
    // timeout: 1000,
    baseURL: 'http://localhost:4000/api/users/'
})

axiosUsersApiInstance.interceptors.response.use(resInterceptor,resErrInterceptor)

export default axiosUsersApiInstance;
