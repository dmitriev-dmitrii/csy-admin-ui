import { ref} from "vue";
import {getUsers}  from "@/api/modules/users/usersListApi";

 export   const usersList =  ref([])

export    const usersListIsLoading =  ref(false)

export    const fetchUsersList = async ()=> {

        try {
            usersListIsLoading.value = true
            const data = await getUsers()
            if ( data ) {
                // @ts-ignore
              usersList.value =  data
            }


        }catch (err) {
            console.log(err)
        }finally {
            usersListIsLoading.value = false
        }
    }


export default {
    usersList,
    usersListIsLoading,
    fetchUsersList
}