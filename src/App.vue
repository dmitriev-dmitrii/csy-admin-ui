<template>
    <v-app :theme="isDarkTheme ? 'dark' : 'light'">
    <v-app-bar  >

      <v-app-bar-title class="font-weight-black">csy Admin</v-app-bar-title>
      <template v-slot:append class="d-flex align-center">
        <v-checkbox hide-details  label="isDarkTheme" v-model="isDarkTheme"/>
      </template>



    </v-app-bar>

      <v-navigation-drawer

      :rail="isSmallNav"
      >
          <v-btn
              class="ma-1 ml-auto d-block"

              :icon="isSmallNav ? 'mdi-chevron-right' : 'mdi-chevron-left'"
              @click.stop="isSmallNav = !isSmallNav"
          ></v-btn>

        <v-divider></v-divider>
        <v-list nav >
          <v-list-subheader >Каталог</v-list-subheader>
          <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
        <v-divider></v-divider>
      </v-navigation-drawer>


    <v-main>
      <h1>abc</h1>
    </v-main>

  </v-app>
</template>

<script>


export default
{
data:()=>{
  return {
    isDarkTheme:true,
    isSmallNav:false,
  }
}
}
</script>
