// 轮播渲染.
myQuery('/rotation', 'R-item-tmp', '.R-item')

// 展示渲染
myQuery('/type', 'show-content-tmp', '.show-content')

//预约渲染
myQuery('/pre', 'drag-ul-tmp', '.drag-ul')

//预约渲染
myQuery('/article', 'new-ul-tmp', '.new-ul')


// 封装请求
function myQuery(url, tmp, name, callback) {
	return axios.get(url)
		.then(res => {
			console.log(res.data)
			if (res.data instanceof Array) {
				let HTML = template(tmp, res)
				document.querySelector(name).innerHTML = HTML
				return false
			}

		})
		.catch(res=>{ //接收不到数据
			let url = window.location.pathname
			if(url.indexOf('index') === 1) window.location = "../../pages/error.html"
			console.log(res)
		})
}