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
import DefaultLayout from "./layouts/DefaultLayout.vue";
import ErrorLayout from "./layouts/ErrorLayout.vue";
import AuthLayout from "./layouts/AuthLayout.vue";
import {LayoutsMap} from "./constats/LayoutsMap.ts";


export default
{
  name:'App',
  components: {DefaultLayout,AuthLayout,ErrorLayout},

  setup() {
    const {meta}  = useRoute()

    const currentLayout =  computed(():LayoutsMap => {
      return meta.layout as LayoutsMap | undefined || LayoutsMap.DEFAULT_LAYOUT
    })

    return { currentLayout };
  },
}
</script>
