<template>
  <h1>Добавить товар</h1>
  <CreateOrEditProduct />
</template>

<script>

import CreateOrEditProduct from "@/components/products/CreateOrEditProduct.vue";

export default {
  name: "CreateProduct",
  components: {CreateOrEditProduct}
}
</script>

<style scoped>

</style>