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
      <template  v-for="(i,index) in catalogNavArr" :key="NavigationDrawer" >
      <template v-if="i.items">
        <v-divider/>
        <v-list-subheader v-if="i.title" class="pr-0" :title="i.title" />
      <v-list-item v-for="listItem in i.items" :key="listItem.routeName" :prepend-icon="listItem.icon" :title="listItem.label"  :to="{name:listItem.routeName}"/>
      <v-divider v-if="i.title"/>
      </template>

      <template v-else >
        <v-list-item  :key="i.routeName" :prepend-icon="i.icon" :title="i.label"  :to="{name:i.routeName}"/>
      </template>
      </template>
    </v-list>

  </v-navigation-drawer>

</template>

<script>
import navItemsList from './navDrawerItemsList'
export default {
  name: "NavigationAside",
  data ()  {
    return {
      isSmallNav:false
    }
  },

  setup () {
    function NavItem(item) {
      this.icon = item.icon || 'mdi-set-none'
      this.routeName = item.routeName || ''
      this.permission = item.permission || ''
      this.label = item.label || this.routeName
    }
    const catalogNavArr = []

    navItemsList.forEach((i)=>{

      if (i.routeName) {

        catalogNavArr.push  (new NavItem(i))
        return
      }

      i.items = i.items.map((item)=>{

        return  new NavItem(item)
      })

      catalogNavArr.push (i)
    })

    return {
      catalogNavArr,

    }
  },
}
</script>

<style scoped>

</style>
