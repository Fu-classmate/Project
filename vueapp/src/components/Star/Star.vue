<template>
  <div class="star" :class="'star-'+size">
    <span class="star-item " v-for="(item,index) in getStar" :key="index" :class="item"></span>
    <!-- <span class="star-item on"></span>
    <span class="star-item half"></span>
    <span class="star-item off"></span>
    <span class="star-item off"></span> -->
  </div>
</template>

<script>
  const CLASS_ON = 'on'
  const CLASS_HALF = 'half'
  const CLASS_OFF = 'off'

  export default {
    props: ['size', 'num'],
    computed: {
      getStar() { //  num=4.7    4.7   4 on  1 half  0 off        4.2   4 on  0 half  1 off
        let starArr = []
        let {
          num
        } = this

        //处理 全星  on
        let intNum = Math.floor(num)
        for (var i = 1; i <= intNum; i++) {
          starArr.push(CLASS_ON)
        }
        //处理半星  half
        if (num * 10 - intNum * 10 > 5) {
          starArr.push(CLASS_HALF)
        }
        //处理 没有星 off
        while (starArr.length < 5) {
          starArr.push(CLASS_OFF)
        }
        return starArr
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
  .star
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/stars/star48_on')
        &.half
          bg-image('./images/stars/star48_half')
        &.off
          bg-image('./images/stars/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star36_on')
        &.half
          bg-image('./images/stars/star36_half')
        &.off
          bg-image('./images/stars/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/stars/star24_on')
        &.half
          bg-image('./images/stars/star24_half')
        &.off
          bg-image('./images/stars/star24_off')
</style>
