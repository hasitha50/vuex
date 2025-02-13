<template>
  <div id="app">
    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two>
  </div>
</template>

<script>
import productListOne from './components/productListOne.vue'
import productListTwo from './components/productListTwo.vue'

export default {
  name: 'App',
  computed:{
    products(){
      return this.$store.state.products
    }
  },
  components: {
    'product-list-one': productListOne,
    'product-list-two': productListTwo
  }
}
</script>

<style scoped>
body {
  font-family: Ubuntu;
  color: #555;
}
</style>
