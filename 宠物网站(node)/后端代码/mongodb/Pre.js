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
	type: String,
	content: String,
	heading: String,
	details: String,
	date: String,
	price: Number
})

// 创建表
const PreImg = mongoose.model('Pre', Pre)

// 创建日期
let d = new Date()
let dN = d.getFullYear()
let dY = d.getMonth() + 1
let dR = d.getDate()
dR > 9 ? dR : dR = '0' + dR

let date = dN + '/' + dY + '/' + dR

// PreImg.create({
// 	type: 'daily',
// 	Img: 'http://25443488.s61i.faiusr.com/2/AD0IoPmQDBACGAAgg72B-AUokOijvwEw7gU4-AI!450x450.jpg',
// 	title: '用户预约',
// 	content: '设计味道浓郁吸引大家的目光',
// 	heading: '宠物猫狗衣服饰',
// 	details: null,
// 	date: date,
// 	price: '199'
// })
// 	.then(res => console.log('添加成功'))
// 	.catch(err => console.log('添加失败'))

// PreImg.create({
// 	type: 'daily',
// 	Img: 'http://25443488.s61i.faiusr.com/2/AD0IoPmQDBACGAAghL2B-AUo9prL2QEw7gU4-AI!450x450.jpg',
// 	title: '用户预约',
// 	content: '一开始到现在就以包装精美',
// 	heading: '新款窝垫可爱狐狸印花',
// 	details: 'on',
// 	date: date,
// 	price: '69'
// })
// 	.then(res => console.log('添加成功'))
// 	.catch(err => console.log('添加失败'))

// PreImg.create({
// 	type: 'Dog-food',
// 	Img: 'http://25443488.s61i.faiusr.com/2/AD0IoPmQDBACGAAghL2B-AUoxLaUnAcw7gU4-AI!450x450.jpg',
// 	title: '用户预约',
// 	content: '深海鱼，鸡肉+深海鱼，牛肉+深海鱼',
// 	heading: '猫零食猫咬咬胶鸡肉牛肉',
// 	details: null,
// 	date: date,
// 	price: '209'
// })
// 	.then(res => console.log('添加成功'))
// 	.catch(err => console.log('添加失败'))

// PreImg.create({
// 	type: 'medical',
// 	Img: 'http://25443488.s61i.faiusr.com/2/AD0IoPmQDBACGAAgg72B-AUolOXVtAcw7gU4-AI!800x800.jpg.webp',
// 	title: '用户预约',
// 	content: '强调设计性，舒适性及人性化',
// 	heading: '宠物狗狗项圈牵绳',
// 	details: null,
// 	date: date,
// 	price: '109'
// })
// 	.then(res => console.log('添加成功'))
// 	.catch(err => console.log('添加失败'))

// PreImg.create({
// 	type: null,
// 	Img: 'http://25443488.s61i.faiusr.com/2/AD0IoPmQDBACGAAgnL2B-AUoiN6W0wQwsgU4hAM.jpg.webp',
// 	title: '用户预约',
// 	content: '根据自然科研旗下《科学报告》...',
// 	heading: '宠运来宠物快运靠谱吗?',
// 	details: 'on',
// 	date: date,
// 	price: '880'
// })
// 	.then(res => console.log('添加成功'))
// 	.catch(err => console.log('添加失败'))

// PreImg.create({
// 	type: null,
// 	Img: 'http://25443488.s61i.faiusr.com/2/AD0IoPmQDBACGAAgnb2B-AUoqPqvtgQwsgU4hAM.jpg.webp',
// 	title: '用户预约',
// 	content: '作为宠物运输行业口碑品牌之...',
// 	heading: '你的宠物狗，可能很焦虑',
// 	details: null,
// 	date: date,
// 	price: '880'
// })
// 	.then(res => console.log('添加成功'))
// 	.catch(err => console.log('添加失败'))

// PreImg.create({
// 	type: null,
// 	Img: 'http://25443488.s61i.faiusr.com/2/AD0IoPmQDBACGAAgnb2B-AUotqTf3wUwsgU4hAM.jpg.webp',
// 	title: '用户预约',
// 	content: '什么是英国犬展？',
// 	heading: '英国犬展 宠物犬美容一掷千金',
// 	details: null,
// 	date: date,
// 	price: '500'
// })
// 	.then(res => console.log('添加成功'))
// 	.catch(err => console.log('添加失败'))

// PreImg.create({
// 	type: null,
// 	Img: 'http://25443488.s61i.faiusr.com/2/AD0IoPmQDBACGAAgnb2B-AUo38zVtAEwsgU4hAM.jpg.webp',
// 	title: '用户预约',
// 	content: '近日，宠舍汇正式上线了移动端...',
// 	heading: '终结孤单！吸猫吸狗集中地， 宠舍汇如何一站式',
// 	details: 'on',
// 	date: date,
// 	price: '750'
// })
// 	.then(res => console.log('添加成功'))
// 	.catch(err => console.log('添加失败'))

module.exports = PreImg
