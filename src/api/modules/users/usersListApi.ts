import axiosUsersApiInstance from "@/api/modules/users/axiosUsersApiInstance";

export const getUsers = async ()=> {
 return await axiosUsersApiInstance.get('/list',)
}

const usersListApi = {
    getUsers,
}
export default usersListApi

