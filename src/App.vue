<template>
    <v-app class="py-2 px-2 px-md-4">
    <v-main>
{{currentLayout}}      <component :is="currentLayout">
        <router-view/>
      </component>


    </v-main>
  </v-app>
</template>

<script lang="ts">

import {computed} from "vue";
import {useRoute} from "vue-router";
import DefaultLayout from "./layouts/components/DefaultLayout.vue";
import {LayoutsMap} from "./layouts/enums/LayoutsMap.ts";
import ErrorLayout from "./layouts/components/ErrorLayout.vue";
import AuthLayout from "./layouts/components/AuthLayout.vue";

export default
{
  name:'App',
  components: {DefaultLayout,AuthLayout,ErrorLayout},

  setup() {
    const {meta}  = useRoute()

    const currentLayout =  computed(():LayoutsMap => {

      return meta.layout || LayoutsMap.DEFAULT_LAYOUT
    })
    return {currentLayout};
  },
}
</script>
