<template>
  <h1>Products </h1>
   <v-btn :to="{name : 'ProductsCreate'}"> добавить товар </v-btn>

  <ProductsListDataTable/>
</template>

<script>
import ProductsList from "@/components/products/ProductsListDataTable.vue";

export default {
  components: {ProductsList}
};
</script>

<style lang="scss" >

</style>