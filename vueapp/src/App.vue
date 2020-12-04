<template>
  <div id="app">
    <FooterGuide v-show='$route.meta.user'></FooterGuide>

    <router-view />
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

  export default {
    name: 'App',
    components: {
      FooterGuide,
    }
  }
</script>

<style lang="stylus">
  @import "../static/css/reset.css"
  @import "./common/stylus/mixins.styl"
</style>
