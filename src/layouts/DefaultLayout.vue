<template>
  <NavigationHeader></NavigationHeader>
  <slot>

  </slot>
</template>

<script lang="ts">

import NavigationHeader from "../components/navigation/NavigationHeader.vue";

export default
{
  name: "DefaultLayout",

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