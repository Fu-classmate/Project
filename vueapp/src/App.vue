<template>
  <div id="app">
    <!-- 路由组件缓存    能在组件切换过程中将状态保留在内存中，防止重复渲染DOM。-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <FooterGuide v-show='$route.meta.requiresAuth'></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    name: 'App',
    data() {
      return {
        isflag: false
      }
    },
    components: {
      FooterGuide
    },
    mounted() {
      //一进入页面重新去获取一下用户信息(自动登录)
      this.$store.dispatch('getUserInfo')
    },
  }
</script>
<style  lang='stylus'>
#app
  width 100%
  height 100%
  background #f5f5f5
  position  relative
</style>
