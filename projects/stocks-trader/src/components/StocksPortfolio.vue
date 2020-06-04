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
import Stock from './Stock.vue'
export default {
  components: {
    Stock
  },
  data: function() {
    return {
      stockPortfolio: [{stockid: 1, stockName: 'Apple', stockPrice: '300',totalStocks: '300', totalValue: '$90000', stockAction: 'Sell', stockActionQuantity: '', loggedInUser: ''}, 
        {stockid: 2, stockName: 'Facebook',stockPrice: '225', totalStocks: '100', totalValue: '$22500', stockAction: 'Sell', stockActionQuantity: '', loggedInUser: ''}]
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
    }
  }
}
</script>
<style scoped>
  .portfolio__stocks {
    display: flex;
  }
</style>