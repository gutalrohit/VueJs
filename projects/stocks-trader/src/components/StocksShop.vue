<template>
  <section class="stocks-shop">
    <h1>You can buy stocks from here!</h1>
    <div class="stocks-shop__stocks">
      <stock v-for="(stock, index) in stockData"
            :key="index"
            :stockid="stock.stockid"
             :stockName="stock.stockName" 
             :stockPrice="stock.stockPrice"
             :stockAction="stock.stockAction"
             :stockActionQuantity="stock.stockActionQuantity"
             @stockTransactionAction="buyStocks"></stock>
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
      stockData: [{stockid: 1, stockName: 'Google', stockPrice: '350', stockAction: 'Buy', stockActionQuantity: ''},
      {stockid: 2, stockName: 'Amazon', stockPrice: '200', stockAction: 'Buy', stockActionQuantity: ''},
      {stockid: 3, stockName: 'Apple', stockPrice: '300', stockAction: 'Buy', stockActionQuantity: ''},
      {stockid: 4, stockName: 'Microsoft', stockPrice: '150', stockAction: 'Buy', stockActionQuantity: ''}]
    }
  },
  methods: {
    buyStocks($event) {
      let stockTotalPrice = 0;
      this.stockData.forEach(element => {
        if (element.stockid === $event.stockid) {
          console.log($event.stockQuantity)
          stockTotalPrice = parseInt(element.stockPrice) * parseInt($event.stockQuantity);
        }    
      });
      console.log(stockTotalPrice)
      this.$store.commit('updateFunds', -stockTotalPrice)
    }
  }
}
</script>
<style>
  .stocks-shop__stocks{
    display: flex;
  }
</style>