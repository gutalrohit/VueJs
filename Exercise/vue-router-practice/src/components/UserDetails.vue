<template>
<section class="p-2">
  <p>User Details Will be shown here </p>
  <router-link tag="button" :to="{name: 'useredit', params: $route.params.id, query: {name: 'rohit'}}" class="btn btn-danger">Edit</router-link>
  <div id="div1" class=box><p>Showing div 1 at the bottom of the page</p></div>
  <div class=box><p id="bottom">Showing div 2 at the bottom of the page</p></div>
</section>
</template>
<style scoped>
  .box {
    width: 300px;
    height: 600px;
  }
</style>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log('Before Enter' + to + from)
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log('Before Update'+ to + from)
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('Before Leave'+ to + from)
    next();
  }
}
</script>