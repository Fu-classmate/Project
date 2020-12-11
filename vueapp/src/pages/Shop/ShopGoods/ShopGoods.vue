<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref='menu-wrapper'>
        <ul class="ulBox" ref='ulBox'>
          <!--current 表示高亮-->
          <!-- 左边导航栏 -->
          <li class="menu-item" v-for="(good, index) in goods" :key="index" @click="clickMenuItem(index)" :class="{current: index===currentIndex}">
            <span class="text bottom-border-1px">
              <img class="icon" :src='good.icon' v-if="good.icon">
              {{good.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper">
        <ul ref="foodsUl" class="foodsUl">
          <li class="food-list-hook" v-for="(good, index) in goods" :key="index">
            <h1 class="title">{{good.name}}</h1>
            <ul>
              <li class="food-item bottom-border-1px" v-for="(food, index) in good.foods" :key="index" @click="showFood(food)">
                <div class="icon">
                  <img width="57" height="57" :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                  </div>
                  <div>{{food.count ||  '无'}}</div>
                  <div class="cartcontrol-wrapper">
                    <!-- 购物车 的商品计算 -->
                    <CartControl :food='food' />
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- 购物车结算组件 -->
      <ShopCart></ShopCart>
    </div>
    <Food :food="showMyfood" ref="food" />
    <!-- 1 父组件向子组件传递值 props 接受 -->
    <!--  2 子组件向父组件传递值（传递的一个方法）$emit -->
    <!-- 3  父组件调用子组件的方法 -->
  </div>
</template>
<script>
  import CartControl from '../../../components/CartControl/CartControl'
  import Food from '../../../components/Food/Food'
  import ShopCart from '../../../components/ShopCart/ShopCart'

  //使用 better-scroll
  import BScroll from 'better-scroll'
  import {
    mapState
  } from 'vuex'
  export default {
    components: {
      CartControl,
      Food,
      ShopCart
    },
    data() {
      return {
        // currentIndex:0,    //左边导航栏高亮
        scrollY: 0, //右侧Y 轴滑动的坐标
        tops: [], // 包含右侧所有分类小列表的top 值
        showMyfood: ''
      };
    },
    mounted() {
      this.$store.dispatch('getShopGoods', () => {
        this.$nextTick(() => { /* 延迟下一次dom更新 立即调用 */
          this._initScroll()
          this._initTops()
        })
      })
    },
    methods: {
      clickMenuItem(index) {
        let tops = this.tops[index]
        this.scrollY = tops
        // 平滑滚动到指定位置  滚动到某一个位置
        this.foodsScroll.scrollTo(0, -tops, 300)
      },
      //初始化滚动
      _initScroll() {
        // new  BScroll('第一个参数是一个dom选择器','第二个参数是配置对象')
        //方式一
        // let  menuWrapper=this.$refs.menu-wrapper
        // new  BScroll(menuWrapper)

        //方式二
        new BScroll('.menu-wrapper', {
          click: true
        })

        // BScroll 触发滚动事件
        this.foodsScroll = new BScroll('.foods-wrapper', {
          click: true,
          probeType: 2, // 手指滑动(惯性滑动和编码滑动不监视) (1,2,3)
        })

        //实时监听滚动的事件
        this.foodsScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(pos.y)
        })
        // 监听滚动结束事件  获取 滚动结束停止的时候y的值
        this.foodsScroll.on('scrollEnd', (pos) => {
          this.scrollY = Math.abs(pos.y)
        })
      },

      _initTops() {
        let top = 0;
        let myTops = [];
        //第一个li不需要滚动
        myTops.push(top)

        //1 获取右边所有的li标签
        let foodsUl_lis = this.$refs.foodsUl.getElementsByClassName('food-list-hook')
        //2 获取右边所有的li标签滚出去的高度
        Array.from(foodsUl_lis).forEach((li, index) => {
          top += li.clientHeight
          myTops.push(top)
        })
        this.tops = myTops
      },
      showFood(food) {
        this.showMyfood = food
        //技巧  让父组件去调用子组件的方法 并且执行
        console.log(this.$refs.food)
        this.$refs.food.tollgeShow()
      }
    },
    computed: {
      ...mapState(['goods']),
      currentIndex() {
        let {
          tops,
          scrollY
        } = this //  scrollY ==736
        let current = tops.findIndex((item, index) => {
          return scrollY >= tops[index] && scrollY < tops[index + 1]
        })
        return current
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .goods
    display: flex
    position: absolute
    top: 215px
    bottom: 46px
    width: 100%
    background: #fff;
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          color: $green
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>
