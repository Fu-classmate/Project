const express = require('express')
const router = express.Router()

//导入数据库
const Rrotation = require('../mongodb/Rotation.js')
const Type = require('../mongodb/Type.js')
const Pre = require('../mongodb/Pre.js')
const Article = require('../mongodb/Article.js')

//查询数据
showRouter('/rotation', Rrotation) //轮播图展示数据
showRouter('/type', Type) //类型展示数据
showRouter('/pre', Pre) //预约展示数据
showRouter('/article', Article) //文章展示数据


function showRouter(url, name) {
	router.get(url, (req, res) => {
		name.find({}).then((result) => {
			res.send(result)
		})
	})
}

module.exports = router
