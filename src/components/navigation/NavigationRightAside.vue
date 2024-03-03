<template>
  <div v-for="item in navItemsList" :key="item.route">
    <router-link :to="{name:item.route}">{{item.title}}</router-link>
  </div>

</template>

<script>

import {ref} from "vue";
export default {
  name: "NavigationRightAside",

  setup () {
    const isSmallNav = ref(false)

    const navItemsList = [   {
      title:'users-list',
      route : 'users-list',
    }]

    return {
      navItemsList,
      isSmallNav
    }
  },
}
</script>

<style scoped>

</style>
