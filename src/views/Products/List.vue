<template>
  <h1>Products </h1>
   <v-btn :to="{name : 'ProductsCreate'}"> добавить товар </v-btn>

  <ProductsList/>
</template>

<script>
import ProductsList from "@/components/products/ProductsList.vue";

export default {
  components: {ProductsList}
};
</script>

<style lang="scss" >

</style>