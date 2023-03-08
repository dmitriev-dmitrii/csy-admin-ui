<template>
  <h1>Products </h1>
    <v-btn :to="{name : 'ProductsCreate'}"> добавить товар </v-btn>
    <v-btn>Фильтры</v-btn>
    <ProductsListDataTable  :items="productsList" />

</template>

<script>

import ProductsListDataTable from "@/components/Products/ProductsListDataTable.vue";
import {mapState} from "vuex";

export default {

  components: {ProductsListDataTable},
  methods:{

  },

  computed: {
    productsList () {
      return this.$store.state.products.list
    }
  },
  created() {
    this.$store.dispatch('products/getProductsList')
  }
};
</script>

<style lang="scss" >

</style>