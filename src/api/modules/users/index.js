
import axios from 'axios'
import axiosInherit from 'axios-inherit'


const usersApiInstance = axiosInherit(axios)
usersApiInstance.defaults.baseURL = 'http://localhost:4000/api/users'
const getUsers = async (params = { })=> {
    try {

        const {data} = await  usersApiInstance.get('/',params)

        return data
    }
    catch (err) {

    }
}

const usersApi = {
    getUsers,
}

export default usersApi