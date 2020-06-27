<template>
 <!-- Follow BEM foe CSS Methodology -->
  <div class="stock">
    <div class="stock__head stock--sell stock__content">
      <!-- Grand children elements naming - BEM element naming only depends on Block
      Hence, grandchildren should use only bloack name, to help to point to the bloack and heirarchy of DOM is not required in naming` -->
      <h2 class="stock__primary">{{stockName}}</h2>
      <p>${{stockPrice}}</p>
    </div>
    <div class="stock__secondary">
      <div class="stock__quantity stock__content">
        <p v-if="totalStocks">Total Stocks: {{totalStocks}}</p>
        <p v-if="totalValue">Total Value: ${{totalValue}}</p>
      </div>
      <div class="stock__action stock__content">
        <input class="text-align-center" id="stockActionQuantity" placeholder="Quantity" type="text" v-model="stockQuantity">
        <button class="btn btn-info" @click="stockTransaction({stockid, stockQuantity})">{{stockAction}}</button>
      </div>
    </div>   
  </div>
</template>

<script>
export default {
  props: ['stockid', 'stockName', 'stockPrice', 'totalStocks', 'totalValue', 'stockAction', 'stockActionQuantity'],
  data() {
    return {
      stockQuantity: this.stockActionQuantity
    }
  },
  methods: {
    stockTransaction(stockTransactionData) {
      this.stockQuantity = ''
      this.$emit('stockTransactionAction', stockTransactionData)
    }
  }
}
</script>

<style scoped>
  .stock {
    width: 400px;
    border: 1px lightskyblue solid;
    border-radius: 3px;
    margin: 16px;
  }
  .stock__head {
    padding: 8px;
  }
  .stock--sell {
    background-color:lightskyblue;
  }
  .stock__secondary {
    display: flex;
    flex-direction: column;
    padding: 8px;
  }
  .stock__content {
    display: flex;
    justify-content: space-between;
  }
  .stock__secondary>* {
    margin-bottom: 8px;
  }
  .text-align-center {
    text-align: center;
  }
</style>