//定义多个可以直接更改state里面数据的方法

import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS,RECEIVE_USER_INFO,RESET_USER_INFO,RECEIVE_RATINGS,RECEIVE_INFO,RECEIVE_GOODS,INCREMENT_FOOD_COUNT,DECREMENT_FOOD_COUNT,CLEAR_CART} from './mutation-types'

export default {
  [RECEIVE_ADDRESS](state ,{address}) {
    state.address=address
  },
  [RECEIVE_CATEGORYS](state ,{categorys}) {
    state.categorys=categorys
  },
  [RECEIVE_SHOPS](state ,{shops}) {
    state.shops=shops
  },

  //退出的时候清空userinfo
  [RESET_USER_INFO](state) {
    alert('退出xxx')
    state.userInfo = {}
  },

  //登录的时候存储 userinfo用户信息
  [RECEIVE_USER_INFO](state, { userInfo }) {
    state.userInfo = userInfo
  },

  [RECEIVE_INFO](state, { info }) {
    state.info = info
  },

  [RECEIVE_GOODS](state, { goods }) {
    state.goods = goods
  },

  [RECEIVE_RATINGS](state, { ratings }) {
    state.ratings = ratings
  },

  //添加商品数量
  [INCREMENT_FOOD_COUNT](state, { food }) {
    state.shopCart.push(food)
  },

  [DECREMENT_FOOD_COUNT](state, { food }) {
    if(food.count == 0) {
        let index = state.shopCart.findIndex((item => item.count == 0))
        state.shopCart.splice(index, 1)
    }
  },

  //清空购物车
  [CLEAR_CART](state) {
    state.shopCart.forEach(item=>item.count=0)
    state.shopCart=[]
  }
}
