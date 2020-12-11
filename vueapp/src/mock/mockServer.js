// 第一步 安装  cnpm i mockjs --save
//第二步引入
import  Mock from 'mockjs'

import apiData from './data.json'

//第三步使用 
// Mock.mock('第一个参数url路径','第二个参数返回的数据')
Mock.mock('/info',{code:0,data:apiData.info})

Mock.mock('/goods',{code:0,data:apiData.goods})

Mock.mock('/ratings',{code:0,data:apiData.ratings})









