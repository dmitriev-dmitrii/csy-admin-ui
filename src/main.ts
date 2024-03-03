import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";

// globalApiInterceptor
// import './api/config/usersInterceptors.ts'
// import {useAuthStore} from "@/store/useAuthStore";


const app = createApp(App)
app.use(router)
app.mount('#app')

// const {refreshAuthTokens}  = useAuthStore
// refreshAuthTokens()
// .then(()=>{
//
// }).catch(()=>{
//
// })
// .finally(()=>{
//
// })


