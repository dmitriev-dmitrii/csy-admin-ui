<template>
  <div>{{user.login}}</div>
  <button @click="logout">logout</button>
</template>

<script lang="ts">


import {user, logout} from "@/store/useAuthStore.ts";

export default {
  name: "NavigationHeader",
  setup() {

    const userShortName =  ''

    return {
      user,
      userShortName,
      logout
    }
}
}
</script>

<style >

</style>
