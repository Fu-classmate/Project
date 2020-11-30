window.onload = () => {
	// 轮播图 动态添加克隆第一张图片
	let box = document.querySelector('.Rotation')
	let ulImg = document.querySelector('.R-item')
	let LiImg = ulImg.children

	let oneLi = ulImg.children[0].cloneNode(true)
	ulImg.appendChild(oneLi);

	// 轮播文字 动态添加克隆第一行文字
	let title = document.querySelector('.title')
	let titleUl = document.querySelector('.title ul')

	let titleLi = titleUl.children[0].cloneNode(true)
	titleUl.appendChild(titleLi);

	//声明点击初始变量
	let indexOne = 0
	let indexTwo = 0

	// 鼠标移入移出 按钮显示隐藏
	box.onmouseover = () => {
		clearInterval(timer1)
		clearInterval(timer2)
	}
	box.onmouseout = () => move()

	move()

	function move() {
		timer1 = setInterval(() => {
			if (indexOne == LiImg.length - 1) {
				indexOne = 0
				ulImg.style.left = 0
			}
			indexOne++
			animation(ulImg, 'left', -indexOne * box.offsetWidth, 10)
		}, 3000)

		timer2 = setInterval(() => {
			if (indexTwo == 2) {
				indexTwo = 0
				titleUl.style.top = 0
			}
			indexTwo++
			animation(titleUl, 'top', -indexTwo * title.offsetHeight, 10)
		}, 4000)
	}

	function animation(eve, dir, trage, span) {
		if (eve.timer) {
			clearInterval(eve.timer)
		}
		eve.timer = setInterval(function() {
			if (dir == 'left') {
				if (eve.offsetLeft == trage) {
					eve.offsetLeft = trage + 'px'
				}
				let steep = (trage - eve.offsetLeft) / span
				steep = steep > 0 ? Math.ceil(steep) : Math.floor(steep)
				eve.style.left = eve.offsetLeft + steep + 'px'
			}
			if (dir == 'top') {
				if (eve.offsetTop == trage) {
					eve.offsetTop = trage + 'px'
				}
				let steep = (trage - eve.offsetTop) / span
				steep = steep > 0 ? Math.ceil(steep) : Math.floor(steep)
				eve.style.top = eve.offsetTop + steep + 'px'
			}
		}, 30)
	}

}
