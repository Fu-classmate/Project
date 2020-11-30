const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Data', {
	//处理报错
	useUnifiedTopology: true,
	useNewUrlParser: true
})

//创建数据库
const Pre = new mongoose.Schema({
	Img: String,
	title: String,
	content: String,
	date: String,
	price: Number
})

// 创建表
const PreImg = mongoose.model('Pre', Pre)

//创建日期
// let d = new Date()
// let dN = d.getFullYear()
// let dY = d.getMonth() + 1
// let dR = d.getDate()
// dR > 9 ? dR : dR = '0' + dR

// let date = dN + '/' + dY + '/' + dR

// PreImg.create({
// 		Img: 'http://m.qpic.cn/psc?/V53AP1BW44j2s44d0aOk1VcKKY36lp4E/45NBuzDIW489QBoVep5mcRxf5qpNKa8.mfnp2e3YHh8K59J2*Khss1bXoR4XeFfx36R.kCjAW9lTAbGk6JtxF4k7sHIdzfo0I8QKy4HplmA!/b&bo=7gJ8Ae4CfAEBGT4!&rf=viewer_4',
// 		title: '预约',
// 		content: '预约',
// 		date: date,
// 		price: '199'
// 	})
// 	.then(res => console.log('添加成功'))
// 	.catch(err => console.log('添加失败'))

// PreImg.create({
// 		Img: 'http://m.qpic.cn/psc?/V53AP1BW44j2s44d0aOk1VcKKY36lp4E/45NBuzDIW489QBoVep5mcXgOogG6CIach5JqLKdS8wlssoTwZiE3kqaCs.ZSDgZ6NVZgFDLJGSHyZKoGoV.j6iKsxBspKPvn8JTaqsivU5Y!/b&bo=7gJ8Ae4CfAEBGT4!&rf=viewer_4',
// 		title: '预约',
// 		content: '预约',
// 		date: date,
// 		price: '69'
// 	})
// 	.then(res => console.log('添加成功'))
// 	.catch(err => console.log('添加失败'))

// PreImg.create({
// 		Img: 'http://m.qpic.cn/psc?/V53AP1BW44j2s44d0aOk1VcKKY36lp4E/45NBuzDIW489QBoVep5mcXgOogG6CIach5JqLKdS8wnUhlr2ARiZt84WZZlKbNky4jQi5YAOIgH9FNRafEmdIinIh1LygMakXlRzSADyNGo!/b&bo=7gJ8Ae4CfAEBGT4!&rf=viewer_4',
// 		title: '预约',
// 		content: '预约',
// 		date: date,
// 		price: '209'
// 	})
// 	.then(res => console.log('添加成功'))
// 	.catch(err => console.log('添加失败'))


module.exports = PreImg
