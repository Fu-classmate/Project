const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Data', {
	//处理报错
	useUnifiedTopology: true,
	useNewUrlParser: true
})

//创建数据库
const Rotation = new mongoose.Schema({
	Img: String,
	title: String,
	content: String,
	date: String
})

// 创建表
const RotationImg = mongoose.model('Rotation', Rotation)

// 创建日期
// let d = new Date()
// let dN = d.getFullYear()
// let dY = d.getMonth() + 1
// let dR = d.getDate()
// dR > 9 ? dR : dR = '0' + dR

// let date = dN + '/' + dY + '/' + dR

// RotationImg.create({
// 		Img: 'https://s3.ax1x.com/2020/11/25/DUJ0Ln.jpg',
// 		title: '轮播图',
// 		content: '猫猫',
// 		date: date
// 	})
// 	.then(res => console.log('添加成功'))
// 	.catch(err => console.log('添加失败'))

// RotationImg.create({
// 		Img: 'https://s3.ax1x.com/2020/11/25/DUJwss.jpg',
// 		title: '轮播图',
// 		content: '狗狗',
// 		date: date
// 	})
// 	.then(res => console.log('添加成功'))
// 	.catch(err => console.log('添加失败'))


module.exports = RotationImg
