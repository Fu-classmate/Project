const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Data', {
	//处理报错
	useUnifiedTopology: true,
	useNewUrlParser: true
})

//创建数据库
const Type = new mongoose.Schema({
	Img: String,
	title: String,
	Type:String,
	content: String,
	date: String
})

// 创建表
const TypeImg = mongoose.model('Types', Type)

// 创建日期
// let d = new Date()
// let dN = d.getFullYear()
// let dY = d.getMonth() + 1
// let dR = d.getDate()
// dR > 9 ? dR : dR = '0' + dR

// let date = dN + '/' + dY + '/' + dR

// TypeImg.create({
// 		Img: 'http://25443488.s61i.faiusr.com/4/AD0IoPmQDBAEGAAgqLyB-AUo2PDXdjBiOGA.png.webp',
// 		title: '类型',
// 		Type:'Dog-food',
// 		content: '正品狗粮',
// 		date: date
// 	})
// 	.then(res => console.log('添加成功'))
// 	.catch(err => console.log('添加失败'))

// TypeImg.create({
// 		Img: 'http://25443488.s61i.faiusr.com/4/AD0IoPmQDBAEGAAgqbyB-AUoqtP5hwEwaDhZ!100x100.png.webp',
// 		title: '类型',
// 		Type:'medical',
// 		content: '医疗用品',
// 		date: date
// 	})
// 	.then(res => console.log('添加成功'))
// 	.catch(err => console.log('添加失败'))

// TypeImg.create({
// 		Img: 'http://25443488.s61i.faiusr.com/4/AD0IoPmQDBAEGAAgpbyB-AUo6br78AcwWDhl!100x100.png.webp',
// 		title: '类型',
// 		Type:'daily',
// 		content: '日常用品',
// 		date: date
// 	})
// 	.then(res => console.log('添加成功'))
// 	.catch(err => console.log('添加失败'))

// TypeImg.create({
// 		Img: 'http://25443488.s61i.faiusr.com/4/AD0IoPmQDBAEGAAgqLyB-AUo6J-3qwYwWDhl!100x100.png.webp',
// 		title: '类型',
// 		Type:'daily',
// 		content: '训练零食',
// 		date: date
// 	})
// 	.then(res => console.log('添加成功'))
// 	.catch(err => console.log('添加失败'))

module.exports = TypeImg
