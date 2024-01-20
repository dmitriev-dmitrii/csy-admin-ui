<template>
  <v-app-bar>

<!--    <template v-slot:image>-->
<!--      <v-img-->
<!--          gradient="to top right, rgba(39,179,137,1), rgba(100,126,255,1)"-->
<!--      ></v-img>-->
<!--    </template>-->

    <template v-slot:prepend>
      <v-btn variant="plain"  :ripple="false" :to="{name:'main'}" class="text-decoration-none font-weight-black pl-0">csy admin</v-btn>
    </template>



    <template v-slot:append>
      <v-menu
      >
        <template v-slot:activator="{ props }">


<v-btn class="pr-0 pl-0" prepend-icon="mdi-menu-down" variant="outlined" v-bind="props">
  <template #prepend>
    <v-icon icon="mdi-menu-down" class="pl-2 pr-0"/>
  </template>

  <span class="d-none d-md-block">
    dmitriev.dm
  </span>
  <template #append>
    <v-avatar  color="info" size="small" class="mr-2" >
      <v-img
          class=""
          v-if="false"
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
      ></v-img>
       <span v-else class="text-no-wrap font-weight-bold">CJ</span>
    </v-avatar>
  </template>
</v-btn>

        </template>

        <v-list>
          <v-list-item >
            <template v-slot:append>
              <v-icon icon="mdi-star"/>
            </template>

            <v-list-item-title v-text="'abc'"/>
          </v-list-item>

        </v-list>

      </v-menu>
    </template>

  </v-app-bar>
</template>

<script>
export default {
  name: "NavigationHeader"
}
</script>

<style >

</style>
