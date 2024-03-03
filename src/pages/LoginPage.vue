<template>

<button @click="submitForm"  type="submit">submit</button>

</template>

<script  lang="ts">
import {defineComponent, onMounted, reactive, ref, unref , onBeforeUnmount} from "vue";

import {useRouter,useRoute} from "vue-router";
import {login,isAuthenticated} from '@/store/useAuthStore.js'



export default {
  name:'LoginPage',

  setup() {

    const router = useRouter()
    const {query} = useRoute()


    const form = reactive( {
      email:'asdsdssdadasd@asxsad.ru',
      login:'fssdsdghjkl',
      password:'qwerssdsdtghuhbhy78iuhgt6y',
    } )

    const redirectPath = query['redirect-path'] || '/'

    if (unref(isAuthenticated)) {
       router.push({path: redirectPath})
    }

    const  submitForm  = async () => {


      await login( unref(form) )
      await router.push({path: redirectPath})



   }



    return {
      submitForm,
      form,
    }
  }
}

</script>
