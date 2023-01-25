<template>
    <v-app :theme="isDarkTheme ? 'dark' : 'light'">

    <v-app-bar>

      <v-btn variant="plain" :ripple="false" to="/" class="text-decoration-none font-weight-black">csy admin</v-btn>

      <template v-slot:append>
        <v-checkbox hide-details  label="isDarkTheme" v-model="isDarkTheme"/>
      </template>

    </v-app-bar>

    <AppNavigationBar/>
    <v-main>
      <div class="pt-2 px-4">
        <router-view />
      </div>

    </v-main>

  </v-app>
</template>

<script>


import AppNavigationBar from "@/components/AppNavigationBar/index.vue";

export default
{
  components: {AppNavigationBar},
data(){
  return {
    isDarkTheme:true,
  }
},

}
</script>
