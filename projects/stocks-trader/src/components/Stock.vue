<template>
 <!-- Follow BEM foe CSS Methodology -->
  <div class="stock">
    <div class="stock__head stock--sell stock__content">
      <!-- Grand children elements naming - BEM element naming only depends on Block
      Hence, grandchildren should use only bloack name, to help to point to the bloack and heirarchy of DOM is not required in naming` -->
      <h2 class="stock__primary">{{stockName}}</h2>
      <p>{{stockPrice}}</p>
    </div>
    <div class="stock__secondary">
      <div class="stock__quantity stock__content">
        <p>Total Stocks: {{totalStocks}}</p>
        <p>Total Value: {{totalValue}}</p>
      </div>
      <div class="stock__action stock__content">
        <input id="stockActionQuantity" placeholder="Quantity" type="text" :value="stockActionQuantity">
        <button class="btn btn-info">{{stockAction}}</button>
      </div>
    </div>   
  </div>
</template>

<script>
export default {
  props: ['stockName', 'stockPrice', 'totalStocks', 'totalValue', 'stockAction', 'stockActionQuantity']
  // data: function() {
  //   return {
  //     stockName: '',
  //     stockPrice: '',
  //     totalStocks: '',
  //     totalValue: '',
  //     stockAction: '',
  //     stockActionQuantity: ''
  //   }
  // }
}
</script>

<style scoped>
  .stock {
    width: 400px;
    border: 1px lightskyblue solid;
    border-radius: 3px;
    margin: 8px;
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
</style>