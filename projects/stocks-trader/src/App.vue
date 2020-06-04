<template>
  <div id="app">
    <header-view></header-view>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import HeaderView from './components/Header.vue'

export default {
  name: 'App',
  components: {
    HeaderView
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
  }
  .slide-enter {
      opacity: 0;
      /*transform: translateY(20px);*/
  }

  .slide-enter-active {
      animation: slide-in 1s ease-out forwards;
      transition: opacity .5s;
  }

  .slide-leave-active {
      animation: slide-out 1s ease-out forwards;
      transition: opacity 1s;
      opacity: 0;
      position: absolute;
  }

  .slide-move {
      transition: transform 1s;
  }

  @keyframes slide-in {
      from {
          transform: translateY(20px);
      }
      to {
          transform: translateY(0);
      }
  }

  @keyframes slide-out {
      from {
          transform: translateY(0);
      }
      to {
          transform: translateY(20px);
      }
  }
  p{
    padding : 0;
    margin: 0;
  }
</style>
