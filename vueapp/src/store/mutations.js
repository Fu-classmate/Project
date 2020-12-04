import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutation-types'

export default {
  [RECEIVE_ADDRESS](state, {address}) {  //解构 actions 传过来的对象
    state.address = address
  },

  [RECEIVE_CATEGORYS](state, {categorys}) {  //解构 actions 传过来的对象
    state.categorys = categorys
  },

  [RECEIVE_SHOPS](state, {shops}) {  //解构 actions 传过来的对象
    state.shops = shops
  }
}
