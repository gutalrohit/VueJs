<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    Routes Will be loaded here!
    <router-view name="headertop"></router-view>
    <transition name="slide">
      <router-view></router-view>
    </transition>
    <router-view name="headerbottom"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
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
