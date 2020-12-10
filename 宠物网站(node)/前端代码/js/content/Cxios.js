// content 内容页
// 正品狗粮商品
let type = window.location.search.split('=')[1]

if (type == 'all') {
	myQuery('/preOne', 'plate-ul-tmp', '.plate-ul', {
		title: '用户预约'
	})
} else {
	myQuery('/preOne', 'plate-ul-tmp', '.plate-ul', {
		type: type
	})
}

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