import Vue from 'vue'
import Router from 'vue-router'

import Msite from '../pages/Msite/msite.vue'
import Order from '../pages/Order/order.vue'
import Profile from '../pages/Profile/profile.vue'
import Search from '../pages/Search/search.vue'
import Login from '../pages/Login/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      name: 'msite',
      component: Msite,
      meta:{user:true}
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      meta:{user:true}
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta:{user:true}
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta:{user:true}
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})
