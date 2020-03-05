<template>
  <div id="app" class="p-4">
    <quote-add @quoteAddButtonClick="addQuotesToList" :allQuotes="allQuotes"></quote-add>
    <quote-show :allQuotes="allQuotes" @deleteQuoteActions="deleteQuote"></quote-show>
    <p v-show="allQuotes.length > 0" class="mt-5">  Click on the quote tile to delete a quote</p>
  </div>
</template>

<script>
import quoteAdd from './components/quote-add';
import quoteShow from './components/quote-show';

export default {
  name: 'App',
  components: {
    quoteAdd,
    quoteShow
  },
  data: function() {
    return {
      allQuotes: []
    }
  },
  methods: {
    addQuotesToList(event) {
      this.allQuotes.push(event);
    },
    deleteQuote(indexTobeDeleteted) {
      this.allQuotes.splice(indexTobeDeleteted, 1);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
