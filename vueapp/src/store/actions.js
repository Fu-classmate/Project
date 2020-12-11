//定义多个可以间接更改state数据的方法  本质核心是通过commit 去触发mutations里面的方法
import Vue from 'vue'
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS,RECEIVE_USER_INFO,RESET_USER_INFO,RECEIVE_GOODS,RECEIVE_RATINGS,RECEIVE_INFO,INCREMENT_FOOD_COUNT,DECREMENT_FOOD_COUNT,CLEAR_CART} from './mutation-types'
import {reqAddress,reqCategorys,reqShops,reqUser,reqLogout,reqShopInfo,reqShopRatings,reqShopGoods} from '../api/index'

export default {
  // 处理异步  形参 context为一个实例对象 解构 {commit,state}
  async getAddress({commit,state}) {  // 地址信息
    let geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)  //得到返回值
    if(result.code === 0) commit(RECEIVE_ADDRESS,{address:result.data}) //传自定义对象
  },

  async getCategorys({commit}) {  // 食品分类列表
    const result = await reqCategorys()  //得到返回值
    if(result.code === 0) commit(RECEIVE_CATEGORYS,{categorys:result.data}) //传自定义对象
  },

  async getShops({commit,state}) {  // 商铺列表
    let {latitude,longitude} = {state}
    const result=  await reqShops({latitude,longitude})  //得到返回值
    if(result.code === 0) commit(RECEIVE_SHOPS,{shops:result.data}) //传自定义对象
  },

  async getUserInfo({commit}){
     let result=  await reqUser()
     console.log(result)
     if(result.code===0) commit(RECEIVE_USER_INFO,{userInfo: result.data})
  },

   // 异步获取用户信息
   async getUserInfo({commit}) {
     let result = await reqUser()
     if (result.code === 0) {
       commit(RECEIVE_USER_INFO, {
         userInfo: result.data
       })
     }
   },

   //记录用户信息
   recordUserInfo({commit}, {userInfo}) {
     commit(RECEIVE_USER_INFO, {userInfo})
     window.localStorage.setItem('userinfo', JSON.stringify(userInfo))
   },

   //退出登录
   async logout({commit}, callback) {
     let res = await reqLogout()
     if (res.code == 0) {
       commit(RESET_USER_INFO)
       callback && callback()
     }
   },

  //获取商家信息
  async getShopInfo({commit}) {
    let res = await reqShopInfo()
    if (res.code == 0) commit(RECEIVE_INFO, {info: res.data})
  },

  //获取商品信息
  async getShopGoods({commit}, callback) {
    let res = await reqShopGoods()
    if (res.code == 0) {
      commit(RECEIVE_GOODS, {goods: res.data})
      callback && callback()
    }
  },

  //获取评分组件信息
  async getShopRatings({commit}) {
    let res = await reqShopRatings()
    if (res.code == 0) commit(RECEIVE_RATINGS, {ratings: res.data})
  },

  //购车车 方法 触发
  updateFoodCount({commit,tate}, {isAdd, food}){
    if (isAdd) { //如果为true 表示数量加加
      if (!food.count) {
        Vue.set(food, 'count', 1)
        commit(INCREMENT_FOOD_COUNT, {food})
      } else {
        food.count++
      }
    } else { // 表示商品数量 减减
      if (food.count) { // 至少数量大于1
        food.count--;
        commit(DECREMENT_FOOD_COUNT, {food})
      }
    }
  },

   //清空购物车
   clearCart({commit}) {commit(CLEAR_CART)}
}
