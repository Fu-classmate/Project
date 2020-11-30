const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/Data', {
	//处理报错
	useUnifiedTopology: true,
	useNewUrlParser: true
})

//创建数据库
const Article = new mongoose.Schema({
	Img: String,
	title: String,
	content: String,
	date:String
})

// 创建表
const ArticleImg = mongoose.model('Article', Article)

//创建日期
// let d = new Date()
// let dN = d.getFullYear()
// let dY = d.getMonth() + 1
// let dR = d.getDate()
// dR > 9 ? dR : dR = '0' + dR

// let date = dN + '/' + dY + '/' + dR

// ArticleImg.create({
// 		Img:'http://m.qpic.cn/psc?/V53AP1BW44j2s44d0aOk1VcKKY36lp4E/45NBuzDIW489QBoVep5mcbWFGR.bLp*GgC3r.81of9jX*d0VQ0.CnpFfIWiV3KC3lQj68hlVpSxmaTxk0yM9u3B1JbnpnBURbiZDCs5.V0g!/b&bo=oAB4AKAAeAABGT4!&rf=viewer_4',
// 		title:'带爱宠自驾返程，这份攻略请收好',
// 		content:'虽然疫情期间实在不建议大家出门，不过年关已过，总有不得不带着宠物们自驾返程的情况存在，返程途中我们铲屎官可以带口罩保护自己，那么对于我们的爱宠，我们可以为它们做点啥呢？出发前准备1.准备好相关证件，参考当地政策目前整个防疫的形势还是比较严格...',
// 		date:date
// 	})
// 	.then(res => console.log('添加成功'))
// 	.catch(err => console.log('添加失败'))
	
// ArticleImg.create({
// 		Img:'http://m.qpic.cn/psc?/V53AP1BW44j2s44d0aOk1VcKKY36lp4E/45NBuzDIW489QBoVep5mcUkKqTq3NyRu0kLv6YcvW9zFql.ah*MsDPcJzaRuIDNEJetQqXaUrGEZ*JIOwdiweM9Dd3xmOrj3u3O2TNkQTXE!/b&bo=oAB4AKAAeAABGT4!&rf=viewer_4',
// 		title:'长骨常见简单骨折手术修复',
// 		content:'桡尺骨、胫腓骨骨折为临床常遇到的两大类骨折，对已经确诊骨折的患宠，首先应该确认单纯骨科问题or神行学问题，如果是神经问题属于神经问题or外周神经问题，在神经学检查良好的情况下考虑接骨术。 早期常用外固定夹板治疗，弊端非常明显，愈合延迟、畸形...',
// 		date:date
// 	})
// 	.then(res => console.log('添加成功'))
// 	.catch(err => console.log('添加失败'))
	
// 	ArticleImg.create({
// 			Img:'http://m.qpic.cn/psc?/V53AP1BW44j2s44d0aOk1VcKKY36lp4E/45NBuzDIW489QBoVep5mcUkKqTq3NyRu0kLv6YcvW9zVUmBu6ah.2QvsDocnydXNQNoyf1tx2cTRDJmM0hTrwcjJCVRZLm5LKH.f.84kIMg!/b&bo=oAB4AKAAeAABGT4!&rf=viewer_4',
// 			title:'47例犬细小病毒治疗体会',
// 			content:'47例犬细小病毒病治疗体会　　犬细小病毒病是临床常见的传染病之一，感染发病急，病程短，对6月龄以下幼犬危害更大，国内报道死亡率约为。本病冬季发病较多，其次为初春或深秋，夏季发病较少。 小于3月龄的幼犬对本病为易感，死亡率也较高，可达77.8...',
// 			date:date
// 		})
// 		.then(res => console.log('添加成功'))
// 		.catch(err => console.log('添加失败'))


module.exports = ArticleImg
