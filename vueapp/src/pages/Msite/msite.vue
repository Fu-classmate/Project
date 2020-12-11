<template>
  <div class="msite">
    <!-- 头部 -->
    <HeaderTop title="昌平区北七家宏福科技园(337省道北)">
      <template v-slot:left>
        <span class="header_search">
          <i class="iconfont icon-sousuo"></i>
        </span>
      </template>

      <template v-slot:right>
        <router-link class="header_login" :to="userInfo._id ? '/profile'  :'/login' " tag="span">
          <span class="header_login">
            <span class="header_login_text" v-if='!userInfo._id'>登录|注册</span>
            <span class="header_login_text" v-else> <i class="iconfont icon-person"></i></span>
          </span>

        </router-link>
      </template>
    </HeaderTop>
    <!--首页轮播图导航-->
    <div class="miste-content-wrapper">
      <div class="miste-content">
        <nav class="msite_nav">
          <div class="swiper-container">
            <!-- 外层包裹标签 -->
            <swiper ref="mySwiper" :options="swiperOptions" class="swiper-wrapper">
              <!-- 第一排 -->
              <swiper-slide class="swiper-slide" v-for="(items,index) in getCategoryList " :key="index">
                <!-- <div class="swiper-slide"> -->
                <a :href="singleItem.link" class="link_to_food" v-for='(singleItem,index) in items' :key="index">
                  <div class="food_container">
                    <img :src="imgBaseUrl+singleItem.image_url" />
                  </div>
                  <span>{{singleItem.title}}</span>
                </a>

              </swiper-slide>
              <!-- 第二排 -->
              <div class="swiper-pagination" slot="pagination">
              </div>
            </swiper>
          </div>
        </nav>
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          <!-- 被抽了  抽到了shipList去了 -->
          <ShopList :shops='shops'></ShopList>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from "vue";
  import VueAwesomeSwiper from "vue-awesome-swiper";
  import "swiper/swiper-bundle.css";

  Vue.use(VueAwesomeSwiper /* { default options with global component } */ );

  import HeaderTop from "../../components/HeaderTop/HeaderTop";
  import ShopList from "../../components/ShopList/ShopList";
  import {
    reqCategorys,
    reqShops
  } from "../../api/index";

  // mapActions  mapMutations  写在methods里面
  import {
    mapState,
    mapActions,
    mapMutations
  } from 'vuex'

  export default {
    data() {
      return {
        swiperOptions: {
          scrollbar: '.swiper-scrollbar',
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },

        },
        imgBaseUrl: 'https://fuss10.elemecdn.com'
      }
    },
    computed: {
      //映射state的数据
      ...mapState(['address', 'categorys', 'shops', 'userInfo']),
      getCategoryList() {
        let bigArr = this.categorys;
        let arr = [];
        let containerArr = []
        bigArr.forEach((item, index) => {
          if (arr.length == 0) {
            containerArr.push(arr)
          }
          arr.push(item)
          if (arr.length == 8) arr = []

        })
        return containerArr
      },
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    methods: {
      //映射actions里面的方法
      ...mapActions(['getAddress', 'getCategorys', 'getShops'])
    },
    components: {
      HeaderTop,
      ShopList
    },
    async mounted() {
      this.swiper.slideTo(3, 1000, false)

      // 请求数据
      // 触发dispatch方法  actions 间接去更改state数据
      //需要执行映射过来的方法
      this.getAddress()
      this.getCategorys()
      this.getShops()
    },
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .miste-content-wrapper
      position relative
      top: 45px
      bottom: 46px
      width: 100%
      .msite_nav
        bottom-border-1px(#e4e4e4)
        margin-top 15px
        height 200px
        background #fff
        .swiper-container
          width 100%
          height 100%
          .swiper-wrapper
            width 100%
            height 100%
            .swiper-slide
              // &.swiper-slide-active
              //    background #02a774
              display flex
              justify-content center
              align-items flex-start
              flex-wrap wrap
              .link_to_food
                width 25%
                .food_container
                  display block
                  width 100%
                  text-align center
                  padding-bottom 10px
                  font-size 0
                  img
                    display inline-block
                    width 50px
                    height 50px
                span
                  display block
                  width 100%
                  text-align center
                  font-size 13px
                  color #666

          .swiper-pagination
            .swiper-pagination-bullet-active
              background #02a774
      .msite_shop_list
        top-border-1px(#e4e4e4)
        margin-top 10px
        background #fff
        .shop_header
          padding 10px 10px 0
          .shop_icon
            margin-left 5px
            color #999
          .shop_header_title
            color #999
            font-size 14px
            line-height 20px
</style>
<style>
/* 新版swiper 存在的bug  */
/* //5  */
  .swiper-container  /deep/  .swiper-pagination-bullet-active {
 background: #02a774;
  }
</style>
