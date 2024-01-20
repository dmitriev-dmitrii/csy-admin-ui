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
<v-checkbox v-model="registrationFlag">registrationFlag</v-checkbox>
    <v-btn type="submit"> submit </v-btn>
    <v-btn type="reset"> reset  </v-btn>
  </v-form>
  <v-btn @click="getUsers">get users</v-btn>
  <v-btn @click="userLogout">userLogout</v-btn>
</template>

<script >
import {defineComponent, reactive, ref, unref} from "vue";

import NavigationAside from "../components/navigation/NavigationAside.vue";
import NavigationHeader from "../components/navigation/NavigationHeader.vue";
import usersApi from "../api/users/index.js";
export default defineComponent({
  name:'Login',
  components: {NavigationHeader, NavigationAside},
  setup() {
    const form = reactive( {
      email:'asdsdssdadasd@asxsad.ru',
      login:'fssdsdghjkl',
      password:'qwerssdsdtghuhbhy78iuhgt6y',
      isShowPassword :false,
      isValid:false,
    } )

    const registrationFlag = ref(false)
    const {userRegistration,getUsers,userLogout,userLogin,userRefreshToken} = usersApi
    userRefreshToken()
const validateForm = ()=>{
      return unref(form.isValid)
}
   const  submitForm  = async () => {
     validateForm()

     if (unref(registrationFlag)) {
       await userRegistration(unref(form))
       return
     }
      await userLogin(unref(form))
   }
    async function formShowPasswordToggle() {
      form.isShowPassword = !form.isShowPassword
    }
    return {
      registrationFlag,
      submitForm,
      form,
      formShowPasswordToggle,
      getUsers,userLogout
    }
  }
})

</script>
