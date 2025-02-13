<template>
  <div id="product-list-one">
    <h3>Product List One</h3>
    <ul>
      <li v-for="product in saleProducts" :key="product.name">
        {{ product.name }} - ${{ product.price }}
      </li>
    </ul>
    <button v-on:click="reducePrice(4)">Reduce price</button>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
    saleProducts() {
      return this.$store.getters.saleProducts;
    }
  },
  methods: {
    reducePrice(amount) {
     return this.$store.dispatch('reducePrice',amount);
    }
  }
}
</script>

<style scoped>
#product-list-one {
  background: #FFF8B1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-one ul {
  padding: 0;
}
#product-list-one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #E8800C;
}
</style>
