<template>
  <article class="portfolio py-4">
    <h1>Here is a list of your stocks</h1>
    <div class="portfolio__stocks">
    <stock :stockName="stockName" 
             :stockPrice="stockPrice"
             :totalStocks="totalStocks"
             :totalValue = "totalValue"
             :stockAction="stockAction"
             :stockActionQuantity="stockActionQuantity"></stock>
    <stock></stock>
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
      stockName: 'Facebook',
      stockPrice: '$225',
      totalStocks: '100',
      totalValue: '$22500',
      stockAction: 'Sell',
      stockActionQuantity: ''
    }
  }
}
</script>
<style scoped>
  .portfolio__stocks {
    display: flex;
  }
</style>