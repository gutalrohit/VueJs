<template>
<div class="header p-2 mb-4">
  <div>
    <router-link tag="button" class="btn btn-primary m-2" to="/">Stock Trader</router-link>
    <router-link tag="button" class="btn btn-primary m-2" to="/stocksportfolio">Portfolio</router-link>
    <router-link tag="button" class="btn btn-primary m-2" to="/stocksshop">Shop</router-link>
  </div>
  <div class="d-flex">
    <p class="header__children"><b>Fund: ${{getFunds}}</b></p>
    <p class="header__children">Logged in User : <b> {{getLoggedInUser}} </b></p>
  </div>
</div>
</template>

<script> 

import { mapGetters } from 'vuex'

export default {
    computed: {
      ...mapGetters([
      'getFunds',
      'getLoggedInUser'
    ])
  }
}
</script>
<style>
  .header {
    display: flex;
    justify-content: space-between;
    background-color: darkgray;
  }
  .header__children {
    padding: 1rem;
  }
</style>