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
             :stockName="stock.stockName" 
             :stockPrice="stock.stockPrice"
             :totalStocks="stock.totalStocks"
             :totalValue = "stock.totalValue"
             :stockAction="stock.stockAction"
             :stockActionQuantity="stock.stockActionQuantity"
             :stockActionFunction="addToFunds"></stock>
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
      stockPortfolio: [{stockName: 'Apple', stockPrice: '$300',totalStocks: '300', totalValue: '$90000', stockAction: 'Sell', stockActionQuantity: '', loggedInUser: ''}, 
        {stockName: 'Facebook',stockPrice: '$225', totalStocks: '100', totalValue: '$22500', stockAction: 'Sell', stockActionQuantity: '', loggedInUser: ''}]
    }
  },
  methods: {
    addToFunds() {
      this.$store.dispatch('updateFunds', 200)
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