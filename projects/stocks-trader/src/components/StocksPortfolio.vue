<template>
  <article class="portfolio py-4">
    <div>
      <label class="m-2" for=""> Please enter Logged in user name </label>
      <input class="m-2" v-model="loggedInUser">
      <button class="btn btn-secondary m-2" @click="updateLoggedInUser">Submit the User</button>
    </div>
    <h1>Here is a list of your stocks</h1>
    <div class="portfolio__stocks">
    <stock   v-for="(stock, index) in stockPortfolio"
            :key="index"
            :stockid="stock.stockid"
             :stockName="stock.stockName" 
             :stockPrice="stock.stockPrice"
             :totalStocks="stock.totalStocks"
             :totalValue = "stock.totalValue"
             :stockAction="stock.stockAction"
             :stockActionQuantity="stock.stockActionQuantity"
             :stockActionFunction="addToFunds"
             @stockTransactionAction="addToFunds"></stock>
    </div>
  </article>
</template>

<script>
import Stock from './StockTraderStock.vue'
import axios from 'axios'
export default {
  components: {
    Stock
  },
  data: function() {
    return {
      stockPortfolio: [],
      loggedInUser: 'Rohit'
    }
  },
  methods: {
    addToFunds($event) {
      let stockTotalPrice = 0;
      this.stockPortfolio.forEach(element => {
        if (element.stockid === $event.stockid) {
          console.log($event.stockQuantity)
          stockTotalPrice = parseInt(element.stockPrice) * parseInt($event.stockQuantity);
        }    
      });
      console.log(stockTotalPrice)
      this.$store.commit('updateFunds', stockTotalPrice)
    },
    updateLoggedInUser() {
      this.$store.dispatch('updateLoogedInUserAction', this.loggedInUser)
    },
    updateStocks(purchasedStocksList) {
      console.log(purchasedStocksList)
      this.stockPortfolio = Object.values(purchasedStocksList);
      this.stockPortfolio = Object.values(purchasedStocksList).map((value) => {
        value.stockAction = 'Sell';
        value.totalStocks = value.stockActionQuantity;
        value.totalValue = +value.totalStocks * +value.stockPrice;
        value.stockActionQuantity = null;
        return value;
      })
    }
  },
  created() {
    axios.get('/stocksPurchased.json')
      .then(response => {
        this.updateStocks(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }
}
</script>
<style scoped>
  .portfolio__stocks {
    display: flex;
  }
</style>