<template>

  <v-form @submit.prevent="submitForm">
    <v-text-field
        v-model="form.login"
        label="login"
    ></v-text-field>
    <v-text-field
        v-model="form.email"
        label="email "
    ></v-text-field>
    <v-text-field
        v-model="form.password"
        :append-inner-icon="form.isShowPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="form.isShowPassword ? 'text' : 'password'"
        label="password"
        hint="hui"
        counter
        @click:append-inner="formShowPasswordToggle"
    ></v-text-field>
    <!--        :rules="[rules.required, rules.min]"-->
    <v-btn type="submit"> submit </v-btn>
    <v-btn type="reset"> reset  </v-btn>
  </v-form>

</template>

<script >
import {defineComponent, onMounted, reactive, ref, unref} from "vue";

import NavigationAside from "../components/navigation/NavigationAside.vue";
import NavigationHeader from "../components/navigation/NavigationHeader.vue";

import { useStore} from 'vuex'
import {useRouter,useRoute} from "vue-router";

export default defineComponent({
  name:'Login',
  components: {NavigationHeader, NavigationAside},
  setup() {
    const store = useStore()
    const {query} = useRoute()
    const router = useRouter()

    const form = reactive( {
      email:'asdsdssdadasd@asxsad.ru',
      login:'fssdsdghjkl',
      password:'qwerssdsdtghuhbhy78iuhgt6y',
      isShowPassword :false,
    } )





   const  submitForm  = async () => {
     try {

      await store.dispatch('auth/login', unref(form))

      const redirectPath = query['redirect-path']

       if (redirectPath) {
          await router.push({path: redirectPath})
       }
     }
    catch (e) {

     }


   }

     function formShowPasswordToggle() {
      form.isShowPassword = !form.isShowPassword
    }

    return {
      submitForm,
      form,
      formShowPasswordToggle,
    }
  }
})

</script>
