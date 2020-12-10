// index 首页
// 轮播渲染.
myQuery('/rotation', 'R-item-tmp', '.R-item')

// 展示渲染
myQuery('/type', 'show-content-tmp', '.show-content')

//商品渲染
myQuery('/pre', 'drag-ul-tmp', '.drag-ul')

//预约渲染
myQuery('/article', 'new-ul-tmp', '.new-ul')

// 封装请求
function myQuery(url, tmp, name, params = {}) {
	return axios.get(url, { params: params })
		.then(res => {
			console.log(res.data)
			if (res.data instanceof Array) {
				let HTML = template(tmp, res)
				document.querySelector(name).innerHTML = HTML
				return false
			}
		})
		.catch(res => { //接收不到数据
			console.log(res)
			window.location = "../../pages/error.html"
		})
}