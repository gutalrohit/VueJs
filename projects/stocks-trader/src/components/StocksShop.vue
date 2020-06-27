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
import Stock from './StockTraderStock.vue';
import axios from 'axios'

export default {
  components: {
    Stock
  },
  data: function() {
    return {
      stockData: []
    }
  },
  methods: {
    buyStocks($event) {
      let stockTotalPrice = 0;
      this.stockData.forEach(element => {
        if (element.stockid === $event.stockid) {
          element.stockActionQuantity = $event.stockQuantity;
          axios.post('/stocksPurchased.json', element)
          .then(response => {
            console.log(response)
          });
          stockTotalPrice = parseInt(element.stockPrice) * parseInt($event.stockQuantity);
        }    
      });
      this.$store.commit('updateFunds', -stockTotalPrice)
    },
    getstocksList() {
      axios.get('/stocks-list.json')
        .then(response => {
          for (let key in response.data) {
            this.stockData = response.data[key];
            this.stockData.key = key;
          }
        }) 
    }
  },
  created() {
    this.getstocksList();
  }
}
</script>
<style>
  .stocks-shop__stocks{
    display: flex;
  }
</style>