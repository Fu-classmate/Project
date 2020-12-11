import Vue from 'vue'
import App from './App'
import router from './router'

import  store from './store/index'
Vue.config.productionTip = false

//导入vant组件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// 引入mock拦截请求的api
import './mock/mockServer'

//引入图片懒加载插件
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
