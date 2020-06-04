import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import { routes } from './router/routes'
import { store } from './store/store'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')