import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import { routes } from './router/routes'
import { store } from './store/store'
import axios from 'axios'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

//Setting default global configurations usinf axios
axios.defaults.baseURL = 'https://stocks-trader-71059.firebaseio.com'
//axios.defaults.headers.get['Auth'] = 'Rohit-application'

// setting interceptors - on incoming or outgoing calls
axios.interceptors.request.use((config) => {
  //config.headers.get['Name'] = 'Stocks-trader'
  return config
})

axios.interceptors.response.use(data => {
  data.intercepted = true;
  return data
})

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