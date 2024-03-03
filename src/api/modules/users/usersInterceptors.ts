import axios from "axios";
import {logout, refreshAuthTokens} from "@/store/useAuthStore";
// @ts-ignore
 export const  resInterceptor = ({data}) => {
    return data
}
// @ts-ignore
export const  resErrInterceptor  = async (err)=> {

    const originalRequest = err.config
    const {status} = err.response
    const {isRetryRefreshAuthTokens = false } = originalRequest

    if (status === 401 && !isRetryRefreshAuthTokens) {
    try {
        await  refreshAuthTokens()
        originalRequest.isRetryRefreshAuthTokens = true
        return  await axios.request(originalRequest);
        } catch (e) {
          await logout()
        }
    }

    throw err
}


