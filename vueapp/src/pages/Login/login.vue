<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on:logWay}" @click="logWay=true">短信登录</a>
          <a href="javascript:;" :class="{on:!logWay}" @click="logWay=false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <!--    手机号登录 -->
          <div :class="{on:logWay}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <!-- rightPhone 为true 表示号码正确  那么   disabled应为为false    -->
              <button :disabled="!rightPhone" class="get_verification" :class="{right_phone:rightPhone}" @click.prevent="getCode">
                <!-- 获取验证码 -->
                {{computeTime>0?'还剩'+computeTime+'秒':'获取验证码'}}

              </button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <!-- 密码登录 -->
          <div :class="{on:!logWay}">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name">
              </section>
              <section class="login_verification">
                <input :type="showPassword?'text':'password'" maxlength="8" placeholder="密码" v-model="pwd">
                <div class="switch_button" @click="showPassword=!showPassword" :class="showPassword?'on':'off'">
                  <div class="switch_circle" :class="showPassword?'myOn':''"></div>
                  <span class="switch_text" v-show='!showPassword'>...</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img class="get_verification" src="http://localhost:3000/captcha" alt="captcha" ref='myImg' @click="getCaptcha">
              </section>
            </section>
          </div>
          <button class="login_submit" @click.prevent='login'>登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
    </div>
  </section>
</template>

<script>
  import {reqSendCode,reqSingleCode,reqPwdLogin,reqSmsLogin} from '../../api/index'
  import Vue from 'vue'
  import {Toast} from 'vant';
  Vue.use(Toast);

  export default {
    data() {
      return {
        logWay: true,
        computeTime: 0,
        showPassword: false, // 是否显示密码
        phone: '', // 手机号
        code: '', // 短信验证码
        name: '', // 用户名
        pwd: '', // 密码
        captcha: '', // 图形验证码
        isFlag: true, // 手机号码    false 用户+密码
        userInfo: ''
      };
    },
    computed: {
      rightPhone() {
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods: {
      //获取验证码
      async getCode() {
        if (this.computeTime == 0) {
          this.computeTime = 20;
          this.timerId = setInterval(() => {
            this.computeTime--;
            if (this.computeTime == 0) {
              clearInterval(this.timerId)
            }
          }, 1000)
        }
        //获取手机号验证码
        let res = await reqSendCode(this.phone)

        // 显示提示框
        if (res.code === 0) Toast.success('验证码获取成功');
      },

      //获取条形验证码
      getCaptcha() {

        //不要服务器缓存 这样才能实现每一次验证码不一样
        this.$refs.myImg.src = 'http://localhost:3000/captcha?time=' + new Date()
      },
      async login() {
        if (this.logWay) {

          //第一种是手机号码+手机验证码
          let {phone,code} = this
          let smsRes = await reqSmsLogin({ phone,code})

          //  this.$store. getUserInfo(smsRes)
          this.userInfo = smsRes.data
        } else {

          //第二种是用户名+密码+验证码
          let {name,pwd,captcha} = this
          let nameRes = await reqPwdLogin({name,pwd,captcha})
          alert('验证码不正确')
          if (nameRes.code == 0) {
            //  this.$store. getUserInfo(nameRes)
            this.userInfo = nameRes.data
            //存储到vuex
            this.$store.dispatch('recordUserInfo', {
              userInfo: this.userInfo
            })
            // this.$router.back()
            this.$router.replace('/profile')
            // this.$router.push('/profile')
          }
        }
      }
    }
  };
</script>
<style scoped  lang='stylus' >
@import "../../common/stylus/mixins.styl"
 .loginContainer
      width 100%
      height 100%
      background #fff
      .loginInner
        padding-top 60px
        width 80%
        margin 0 auto
        .login_header
          .login_logo
            font-size 40px
            font-weight bold
            color #02a774
            text-align center
          .login_header_title
            padding-top 40px
            text-align center
            >a
              color #333
              font-size 14px
              padding-bottom 4px
              &:first-child
                margin-right 40px
              &.on
                color #02a774
                font-weight 700
                border-bottom 2px solid #02a774
        .login_content
          >form
            >div
              display none
              &.on
                display block
              input
                width 100%
                height 100%
                padding-left 10px
                box-sizing border-box
                border 1px solid #ddd
                border-radius 4px
                outline 0
                font 400 14px Arial
                &:focus
                  border 1px solid #02a774
              .login_message
                position relative
                margin-top 16px
                height 48px
                font-size 14px
                background #fff
                .get_verification
                  position absolute
                  top 50%
                  right 10px
                  transform translateY(-50%)
                  border 0
                  color #ccc
                  font-size 14px
                  background transparent
                  &.right_phone
                     color black
              .login_verification
                position relative
                margin-top 16px
                height 48px
                font-size 14px
                background #fff
                .switch_button
                  font-size 12px
                  border 1px solid #ddd
                  border-radius 8px
                  transition background-color .3s,border-color .3s
                  padding 0 6px
                  width 30px
                  height 16px
                  line-height 16px
                  color #fff
                  position absolute
                  top 50%
                  right 10px
                  transform translateY(-50%)
                  &.off
                    background #fff
                    .switch_text
                      float right
                      color #ddd

                  &.on
                    background #02a774
                  >.switch_circle
                    //transform translateX(27px)
                    position absolute
                    top -1px
                    left -1px
                    width 16px
                    height 16px
                    border 1px solid #ddd
                    border-radius 50%
                    background #fff
                    box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                    transition transform .3s
                    &.myOn
                      transform translateX(27px)

              .login_hint
                margin-top 12px
                color #999
                font-size 14px
                line-height 20px
                >a
                  color #02a774
            .login_submit
              display block
              width 100%
              height 42px
              margin-top 30px
              border-radius 4px
              background #4cd96f
              color #fff
              text-align center
              font-size 16px
              line-height 42px
              border 0
          .about_us
            display block
            font-size 12px
            margin-top 20px
            text-align center
            color #999
        .go_back
          position absolute
          top 5px
          left 5px
          width 30px
          height 30px
          >.iconfont
            font-size 20px
            color #99
</style>
