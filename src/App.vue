<template>
    <v-app :theme="appTheme">
    <v-app-bar >
      <h1>abc bar</h1>


    </v-app-bar>
    <v-navigation-drawer permanent>
      <h1>abc</h1>
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
    appTheme:'dark'
  }
}
}
</script>
