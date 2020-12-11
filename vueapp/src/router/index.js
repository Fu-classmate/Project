import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  linkActiveClass: 'on', // 被选中的路由对应的标签上面会有一个类名叫on
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      name: 'msite',
      component: () => import('../pages/Msite/Msite.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../pages/Search/Search.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../pages/Order/Order.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../pages/Profile/Profile.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: ' login',
      component: () => import('../pages/login/login.vue'),
    },
    {
      path: '/shop',
      name: ' shop',
      component: () => import('../pages/Shop/Shop'),
      children: [{
          path: '/shop/goods',
          component: () => import('../pages/Shop/ShopGoods/ShopGoods'),
        },
        {
          path: '/shop/ratings',
          component: () => import('../pages/Shop/ShopGoods/ShopInfo'),
        },
        {
          path: '/shop/info',
          component: () => import('../pages/Shop/ShopGoods/ShopRatings'),
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    }
  ]
})
