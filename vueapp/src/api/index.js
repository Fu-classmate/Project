import {getData,postData} from './ajax'
// let  baseUrl='http://localhost:3000'
let baseUrl='/api'

/**
* 获取地址信息(根据经纬度串)
40.10038,116.36867
http://localhost:3000/position/40.10038,116.36867
*/
 export const   reqAddress=(geohash)=>getData(baseUrl+'/position/'+geohash)


/**
* 获取msite 页面食品分类列表
*/

export const   reqCategorys=()=>getData(baseUrl+'/index_category')




/**
* 获取msite 商铺列表(根据经纬度)
*/
// |参数          |是否必选  |类型     |说明|
// |latitude      |Y        |string   |纬度|
// |longitude     |Y       |string    |经度|

export const reqShops=({latitude,longitude})=>getData(baseUrl+'/shops',{latitude,longitude})





// 用户名密码登陆

// http://localhost:3000/login_pwd
// |参数		|是否必选 |类型     |说明
// |name       |Y       |string   |用户名
// |pwd        |Y       |string   |密码
// |captcha    |Y       |string   |验证码

export  const  reqPwdLogin=(params)=>postData(baseUrl+'/login_pwd',params)







//获取获取一次性验证码
// http://localhost:3000/captcha


export  const  reqSingleCode=()=>getData(baseUrl+'/captcha')




// 发送短信验证码
// http://localhost:3000/sendcode

export  const  reqSendCode=(params)=>getData(baseUrl+'/sendcode',params)



//手机号验证码登陆  post

// http://localhost:3000/login_sms

// |参数		|是否必选 |类型     |说明
// |phone       |Y       |string   |手机号
// |code        |Y       |string   |验证码
export  const   reqSmsLogin=(params)=>postData(baseUrl+'/login_sms',params)





//个人信息 获取 
// http://localhost:3000/userinfo
export  const   reqUser=()=>getData(baseUrl+'/userinfo')





//退出登录

// http://localhost:3000/logout

export  const   reqLogout=()=>getData(baseUrl+'/logout')

















// |参数          |是否必选  |类型     |说明|
// |geohash      |Y       |string    |经纬度
// |keyword      |Y       |string    |关键字