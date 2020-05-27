import Vue from 'vue'
import VueRouter from 'vue-router';
import {routes} from './components/routes';
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to) {
    return to.hash;
  }
});

router.beforeEach((to, from, next) => {
  //all these three arguments need to be defined, only next as an argum ent does not work
  console.log('Loaded a component' + to + from)
  next();
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
//router need to be added to vue using 'router' key in the vue instance, with other key it wont work