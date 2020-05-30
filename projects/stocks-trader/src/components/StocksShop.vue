<template>
  <section class="stocks-shop">
    <h1>You can buy stocks from here!</h1>
    <div class="stocks-shop__stocks">
      <stock :stockName="stockName" 
             :stockPrice="stockPrice"
             :stockAction="stockAction"
             :stockActionQuantity="stockActionQuantity"></stock>
    </div>
  </section>
</template>
<script>
import Stock from './Stock.vue';
export default {
  components: {
    Stock
  },
  data: function() {
    return {
      stockName: 'Google',
      stockPrice: '$1429',
      stockAction: 'Buy',
      stockActionQuantity: ''
    }
  }
}
</script>
<style>
  .stocks-shop__stocks{
    display: flex;
  }
</style>