//
// import axios from "axios";
// export default {
//     namespaced: true,
//     state: {
//         list:[]
//     },
//
//     getters:{
//
//     },
//
//     mutations: {
//         setProductsList (state,productsListArr) {
//             state.list = productsListArr.map((item)=>{
//                 item.id = item._id
//                 return item
//             })
//         }
//     },
//
//     actions: {
//         async  createProduct (context,payload) {
//             try{
//                 await  axios.post('http://localhost:3000/api/catalog/products/',payload)
//
//                 // context.commit('setProductsList',res.data)
//             } catch (err) {
//                 console.log(err)
//             }
//
//         },
//
//        async  updateProductById (context,payload) {
//             try{
//
//                await axios.patch(`http://localhost:3000/api/catalog/products/${payload.id}`,payload)
//
//             }catch (err) {
//                 console.log(err)
//             }
//
//         },
//         async deleteProductById (context,payload) {
//             try{
//                   await axios.delete(`http://localhost:3000/api/catalog/products/${payload.id}`)
//
//             }catch (err) {
//                 console.log(err)
//             }
//
//         },
//         async getProductById (context,payload) {
//             try{
//                 const res =  await axios.get(`http://localhost:3000/api/catalog/products/${payload.id}`)
//                 console.log(res)
//                 // context.commit('setProductsList',res.data)
//             }catch (err) {
//                 console.log(err)
//             }
//
//         },
//         async getProductsList (context) {
//             try{
//                 const res =   await axios.get('http://localhost:3000/api/catalog/products')
//                 context.commit('setProductsList',res.data)
//                 return res.data
//             }catch (err) {
//                 console.log(err)
//                 return err
//             }
//         },
//
//     },
//
// }
//
