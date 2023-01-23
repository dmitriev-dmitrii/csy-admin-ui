<template>
  <v-navigation-drawer
      :rail="isSmallNav"
  >

    <v-btn
        class="ma-1 ml-auto d-block"
        :icon="isSmallNav ? 'mdi-chevron-right' : 'mdi-chevron-left'"
        @click.stop="isSmallNav = !isSmallNav"
    />


    <v-list nav>
      <template  v-for="(i,index) in catalogNavArr" :key="index" >
      <template v-if="i.items">
        <v-divider/>
        <v-list-subheader v-if="i.title" class="px-0">{{i.title}}</v-list-subheader>
      <v-list-item v-for="listItem in i.items" :key="listItem.route" :prepend-icon="listItem.icon" :title="listItem.label"  :to="listItem.route"/>
      <v-divider v-if="i.title"/>
      </template>

      <template v-else >
        <v-list-item  :key="i.route" :prepend-icon="i.icon" :title="i.label"  :to="i.route"/>
      </template>
      </template>
    </v-list>


  </v-navigation-drawer>

</template>

<script>
import itemsList from './itemsList'
export default {
  name: "AppNavigationBar",
  data ()  {
    return {
      isSmallNav:false
    }
  },

  setup () {
    function NavItem(item) {
      this.icon = item.icon || 'mdi-set-none'
      this.route = item.route || ''
      this.permission = item.permission || ''
      this.label = item.label || this.route
    }
    const catalogNavArr = []

    itemsList.forEach((i)=>{

      if (i.route) {

        catalogNavArr.push  (new NavItem(i))
        return
      }

      i.items = i.items.map((item)=>{
        console.log(new NavItem(item))
        return  new NavItem(item)
      })
      console.log( i.items )
      catalogNavArr.push (i)
    })
    console.log(catalogNavArr)
    return {
      catalogNavArr,

    }
  },
}
</script>

<style scoped>

</style>