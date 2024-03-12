<template>
    <div>

      <NavigationHeader v-if="isAuthenticated"/>
      <NavigationAside v-if="isAuthenticated"/>
      <router-view/>

  </div>
</template>

<script lang="ts">


import NavigationHeader from "@/components/navigation/NavigationHeader.vue";
import NavigationAside from "@/components/navigation/NavigationRightAside.vue";
import {isAuthenticated} from "@/store/useAuthStore";

export default
{
  name:'App',
  components: {NavigationHeader,NavigationAside},

  setup() {

    console.log(import.meta.env)
    return { isAuthenticated };
  },
}
</script>
