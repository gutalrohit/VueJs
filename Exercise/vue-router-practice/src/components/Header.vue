<template>
<section id="navigation">
  <router-link to='/home' class="btn btn-secondary mr-2" active-class="active" tag="button" exact>Home</router-link>
  <button class="btn btn-primary mr-1" @click="goToDestination">User</button>
  <!-- <router-link to='/aboutdashboard/Namrata' tag="button" class="btn btn-danger">About Namrata</router-link> -->
</section>
</template>

<script>
export default {
  props: {
    name: {}
  },
  methods: {
    goToDestination() {
      //addin g the route  on top of exisiting stack to make sure back and forward buttons work. We are adding th e route on entire router. HEnce , using $router and not $route.
      //$route refers to particular route loaded in the browser
      this.$router.push('/user');
    }
  }
}
</script>