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
	content: String,
	date: String
})

// 创建表
const TypeImg = mongoose.model('Types', Type)

//创建日期
// let d = new Date()
// let dN = d.getFullYear()
// let dY = d.getMonth() + 1
// let dR = d.getDate()
// dR > 9 ? dR : dR = '0' + dR

// let date = dN + '/' + dY + '/' + dR

// TypeImg.create({
// 		Img: 'http://m.qpic.cn/psc?/V53AP1BW44j2s44d0aOk1VcKKY36lp4E/45NBuzDIW489QBoVep5mcfC3JmW4BIrj8WeY.1IP7XnKCvru8Tz4icZOmCI5SIRXKMHcQASsGqWW9gzTHnkYv93AYc*j8HuWaWqggixRbog!/b&bo=YgBgAGIAYAADGTw!&rf=viewer_4',
// 		title: '类型',
// 		content: '正品狗粮',
// 		date: date,
// 		price: ''
// 	})
// 	.then(res => console.log('添加成功'))
// 	.catch(err => console.log('添加失败'))

// TypeImg.create({
// 		Img: 'http://m.qpic.cn/psc?/V53AP1BW44j2s44d0aOk1VcKKY36lp4E/45NBuzDIW489QBoVep5mcfC3JmW4BIrj8WeY.1IP7XmYblZImp0*E0hGWwPJd6SG3nbbY2r7vf5fVo0YSJRc8TCR0o9dqi9QcdijipH.LgI!/b&bo=aABZAGgAWQADGTw!&rf=viewer_4',
// 		title: '类型',
// 		content: '医疗用品',
// 		date: date,
// 		price: ''
// 	})
// 	.then(res => console.log('添加成功'))
// 	.catch(err => console.log('添加失败'))

// TypeImg.create({
// 		Img: 'http://m.qpic.cn/psc?/V53AP1BW44j2s44d0aOk1VcKKY36lp4E/45NBuzDIW489QBoVep5mcfC3JmW4BIrj8WeY.1IP7XnQdRCOkBD.fKqBjpcZL0peRNofth3fv58yUj*S2QEE.vT0OfoPKrLitIcxlwVK5ck!/b&bo=WABlAFgAZQADGTw!&rf=viewer_4',
// 		title: '类型',
// 		content: '日常用品',
// 		date: date,
// 		price: ''
// 	})
// 	.then(res => console.log('添加成功'))
// 	.catch(err => console.log('添加失败'))

// TypeImg.create({
// 		Img: 'http://m.qpic.cn/psc?/V53AP1BW44j2s44d0aOk1VcKKY36lp4E/45NBuzDIW489QBoVep5mcfC3JmW4BIrj8WeY.1IP7XmRny58BU9fAmXOLJSW1ag3XSaH9QImv0YH2eafn8*e2dSMoDR1Oihp.jSkHwkkvso!/b&bo=WABlAFgAZQADGTw!&rf=viewer_4',
// 		title: '类型',
// 		content: '训练狗粮',
// 		date: date,
// 		price: ''
// 	})
// 	.then(res => console.log('添加成功'))
// 	.catch(err => console.log('添加失败'))



module.exports = TypeImg
