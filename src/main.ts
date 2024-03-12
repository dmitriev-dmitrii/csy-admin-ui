import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import { refreshAuthTokens } from "@/store/useAuthStore";



const app = createApp(App)
app.use(router)

Promise.all([router.isReady(),refreshAuthTokens()])
    .then(()=>{

    })
    .finally(()=>{
    app.mount(`#csy-admin-ui`)
})


