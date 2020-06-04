<template>
  <section class="stocks-shop">
    <h1>You can buy stocks from here!</h1>
    <div class="stocks-shop__stocks">
      <stock v-for="(stock, index) in stockData"
            :key="index" 
             :stockName="stock.stockName" 
             :stockPrice="stock.stockPrice"
             :stockAction="stock.stockAction"
             :stockActionQuantity="stock.stockActionQuantity"
             :stockActionFunction="DuductFunds"></stock>
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
      stockData: [{stockName: 'Google', stockPrice: '$350', stockAction: 'Buy', stockActionQuantity: ''}, {stockName: 'Amazon', stockPrice: '$200', stockAction: 'Buy', stockActionQuantity: ''}
      ,{stockName: 'Apple', stockPrice: '$300', stockAction: 'Buy', stockActionQuantity: ''}, {stockName: 'Microsoft', stockPrice: '$150', stockAction: 'Buy', stockActionQuantity: ''}]
    }
  },
  methods: {
    DuductFunds() {
      this.$store.commit('updateFunds', -100)
    }
  }
}
</script>
<style>
  .stocks-shop__stocks{
    display: flex;
  }
</style>