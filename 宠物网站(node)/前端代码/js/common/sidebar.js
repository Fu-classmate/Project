(function () {
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
})()

