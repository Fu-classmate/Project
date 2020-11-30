nav() //侧边栏展开
load() //加载动画

//侧边栏展开
function nav() {
	let navBtn = document.querySelector('.navBtn') //展开按钮
	let leftBox = document.querySelector('.left-box')
	let rigthBox = document.querySelector('.right-box')

	let item = true
	navBtn.onclick = () => {
		if (item) {
			leftBox.style.left = '0'
			rigthBox.style.left = 3.1 + 'rem'
			item = false
		} else {
			leftBox.style.left = -3.1 + 'rem'
			rigthBox.style.left = '0'
			item = true
		}
	}
}

//加载动画
function load() {
	let ld = document.querySelector('.load')
	let app = document.querySelector('#app')

	setTimeout(() => {
		app.style.opacity = '1'
	}, 2100)

	setTimeout(() => {
		ld.remove() //清除html标签
		app.style.display = 'block'
	}, 2000)
}

// 轮播渲染.
myQuery('/rotation', 'R-item-tmp', '.R-item')

// 展示渲染
myQuery('/type', 'show-content-tmp', '.show-content')

//预约渲染
myQuery('/pre', 'drag-ul-tmp', '.drag-ul')

//预约渲染
myQuery('/article', 'new-ul-tmp', '.new-ul')

// 封装请求
function myQuery(url, tmp, name) {
	return axios.get(url).then(res => {
		console.log(res.data)
		if (res.data instanceof Array) {
			let HTML = template(tmp, res)
			document.querySelector(name).innerHTML = HTML
			return false
		}
		
		//接收不到数据
		window.location = "error.html"
		
	}).catch(err => {
		console.log(err)
	})
}
