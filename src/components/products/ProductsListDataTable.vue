<template>

  <v-table
      class="my-4"
      fixed-header
  >
    <thead>
    <tr>
      <th class="text-left">
        Название
      </th>
      <th >
        c
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
        v-for="item in items"
        :key="item.name"
    >
      <td> <router-link :to="{name:'ProductsEdit',
                              params:{id:item.id}}">{{ item.name }}</router-link> </td>
      <td></td>

    </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  name: "ProductsDataTableList",
  data () {
    return {

    }
  },
  props:{
    items:{
      required:true,
      type: Array,
      default:()=>[]
    }
  }
}
</script>