<template>
<h1>edit {{$route.params.id}}</h1>
  <CreateOrEditProduct :productId="$route.params.id" />
</template>

<script>


import CreateOrEditProduct from "../../components/Products/CreateOrEditProduct.vue";

export default {
  name: "Edit",
  components: {CreateOrEditProduct}
}
</script>

<style scoped>

</style>