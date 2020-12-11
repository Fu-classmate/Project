import {getData,postData} from './ajax'

// let  baseUrl='http://localhost:3000'
let baseUrl='/api'

export const   reqAddress=(geohash)=>getData(baseUrl+'/position/'+geohash)

// 获取msite 页面食品分类列表
export const   reqCategorys=()=>getData(baseUrl+'/index_category')

//获取msite 商铺列表(根据经纬度)
export const reqShops=({latitude,longitude})=>getData(baseUrl+'/shops',{latitude,longitude})

// 用户名密码登陆
export  const  reqPwdLogin=(params)=>postData(baseUrl+'/login_pwd',params)

//获取获取一次性验证码
export  const  reqSingleCode=()=>getData(baseUrl+'/captcha')
// 发送短信验证码
export  const  reqSendCode=(phone)=>getData(baseUrl+'/sendcode',{phone})

//手机号验证码登陆  post
export  const   reqSmsLogin=(params)=>postData(baseUrl+'/login_sms',params)

//个人信息 获取
export  const   reqUser=()=>getData(baseUrl+'/userinfo')

//退出登录
export  const   reqLogout=()=>getData(baseUrl+'/logout')

//商品详情api 封装
export  let reqShopInfo=()=>getData('/info')
export  let reqShopRatings=()=>getData('/ratings')
export  let reqShopGoods=()=>getData('/goods')
