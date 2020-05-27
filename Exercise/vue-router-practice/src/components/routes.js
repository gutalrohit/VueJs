import User from './../components/User.vue';
import Home from './../components/Home.vue';
import UserStart from '../components/UserStart.vue';
import UserDetails from '../components/UserDetails.vue';
import UserEdit from '../components/UserEdit.vue'; 
import Header from '../components/Header.vue';

export const routes = [
  {path: '/home', components: {default: Home, 'headertop': Header}, beforeEnter: (to, from ,next) => {
    console.log('Before ENtering Home, remove your shoes' + to + from) 
    next()} 
  }, //Everytime, or anywhere you use routing Gaurds make sure you write next(). 
  {path: '/user', components: {default:User, 'headerbottom':Header}, props: true, children: [
    {path: '/', component: UserStart},
    {path: 'userdetails/:id', component: UserDetails, name: 'userdetails'},
    {path: 'useredit/:id', component: UserEdit, name: 'useredit'}]
  },
  {path: '/abcd', redirect: '/home'},
  {path: '*', redirect: '/user' }
]