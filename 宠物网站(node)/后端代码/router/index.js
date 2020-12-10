const express = require('express')
const router = express.Router()

//导入数据库
const Rrotation = require('../mongodb/Rotation.js')
const Type = require('../mongodb/Type.js')
const Pre = require('../mongodb/Pre.js')
const Article = require('../mongodb/Article.js')

showRouter('/rotation', Rrotation) // 轮播图展示数据

showRouter('/type', Type) // 类型展示数据

showRouterMany('/pre', Pre, { // 指定展示
	details: 'on'
})

// 查询单条数据
showRouterOne('/preOne', Pre) //预约展示数据

//预约展示数据
showRouter('/article', Article) //文章展示数据

// 查询全部
function showRouter(url, name) {
	router.get(url, (req, res) => {
		name.find({})
			.then((result) => {
				res.send(result)
			})
			.catch(err => {
				res.send({
					status: 500,
					msg: '查询当前数据失败 找不到这条数据',
					message: err.message
				})
			})
	})
}

// 单项查询
function showRouterOne(url, name) {
	router.get(url, (req, res) => {
		let { type, title } = req.query

		if (type) name.find({ type }).then((result) => {
			res.send(result)
		})
		if (title) name.find({ title }).then((result) => {
			res.send(result)
		})
			.catch(err => {
				res.send({
					status: 500,
					msg: '查询当前数据失败 找不到这条数据',
					message: err.message
				})
			})
	})
}

// 类型查询
function showRouterMany(url, name, details) {
	router.get(url, (req, res) => {
		name.find(details)
			.then((result) => {
				res.send(result)
			})
			.catch(err => {
				res.send({
					status: 500,
					msg: '查询当前数据失败 找不到这条数据',
					message: err.message
				})
			})
	})
}
module.exports = router
