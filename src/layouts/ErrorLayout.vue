<template>
<!--  v-if=login-->
  <NavigationHeader v-if="false"></NavigationHeader>
  <slot></slot>
</template>

<script lang="ts">

import NavigationHeader from "../components/navigation/NavigationHeader.vue";

export default
{
  name: "ErrorLayout",

  components:{
    NavigationHeader
  },
  setup() {

    return {};
  },
}
</script>


<style scoped>

</style>