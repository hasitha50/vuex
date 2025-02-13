<template>
  <div id="product-list-two">
    <h3>Product List Two</h3>
    <ul>
      <li v-for="product in saleProducts" :key="product.name">
        {{ product.name }} - ${{ product.price }}
      </li>
    </ul>
    <button v-on:click="reducePrice(4)">Reduce price new</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
export default {
  computed:{
    products(){
      return this.$store.state.products
    },
   ...mapGetters([
    'saleProducts'
   ])
  },
  methods: {
   ...mapActions([
    'reducePrice',
   ])
  }
}
</script>

<style scoped>
#product-list-two{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-two ul{
    padding: 0;
    list-style-type: none;
}
#product-list-two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #860CE8;
    display: block;
}
</style>
