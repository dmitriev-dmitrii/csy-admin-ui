export default function authMiddleware (xz){
    // { next, store }
    // console.log(xz)
    // if(!store.getters.authRoutes.ts.isSubscribed){
    //     return next({
    //         name: 'dashboard'
    //     })
    // }

    return xz.next()
}