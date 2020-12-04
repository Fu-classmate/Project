//定义多个可以间接更改state数据的方法  本质核心是通过commit 去触发mutations里面的方法

// 引入变量命名
import {RECEIVE_ADDRESS,RECEIVE_CATEGORYS,RECEIVE_SHOPS} from './mutation-types'

//引入封装好后的 api 地址信息 食品分类列表 商铺列表
import {reqAddress,reqCategorys,reqShops} from '../api/index'

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
    }

}
