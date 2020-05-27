<template>
<section class="p-5">
  <router-link :to="{name: 'userdetails', params: {id: i}, hash: '#bottom'}" tag="button" class="ml-auto btn btn-secondary mr-2"  v-for="i in 3" :key="i">User {{i}}</router-link>
</section>
</template>
<script>
export default {
  
}
</script>