<template>
    <v-app class="py-2 px-2 px-md-4">
    <v-main>
      <component :is="currentLayout">
        <router-view/>
      </component>
    </v-main>
  </v-app>
</template>

<script lang="ts">

import {computed} from "vue";
import {useRoute} from "vue-router";
import DefaultLayout from "./layouts/components/DefaultLayout.vue";
import ErrorLayout from "./layouts/components/ErrorLayout.vue";
import AuthLayout from "./layouts/components/AuthLayout.vue";
import {LayoutsMap} from "./constats/LayoutsMap.ts";

export default
{
  name:'App',
  components: {DefaultLayout,AuthLayout,ErrorLayout},

  setup() {
    const {meta}  = useRoute()

      const currentLayout =  computed(():LayoutsMap => {
        console.log(meta)
      return   LayoutsMap.DEFAULT_LAYOUT
    })
    return { currentLayout };
  },
}
</script>
