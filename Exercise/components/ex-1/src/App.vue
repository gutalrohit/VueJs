<template>
    <div class="container">
        <header-component></header-component>
        <hr>
        <server-details></server-details>
        <hr>
        <footer-component></footer-component>
    </div>
</template>

<script>
import Vue from 'vue';
import headerComponent from './components/header.vue';
import serverDetails from './components/server-details.vue';
import footerComponent from './components/footer-component.vue';

//Registering a component globally
Vue.component('footerComponent', footerComponent);

export default {
    data: function() {
        return {}
    },
    components: {
       headerComponent,
       serverDetails
    }
}

</script>

<style>

</style>
