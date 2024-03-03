<template>

  <h1>users: </h1>

<div v-for="user in  usersList" :key="user.id">
  {{user.login}}
</div>


</template>

<script lang="ts">


import {fetchUsersList, usersList, usersListIsLoading} from "@/store/useUsersStore";

export default {

  setup(){

    fetchUsersList()

    return {
      usersListIsLoading,
      usersList
    }
  }

};
</script>

<style lang="scss" >

</style>