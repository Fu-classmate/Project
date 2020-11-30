var flag = true
$(window).scroll(function() {
	window.onbeforeunload = function() {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	}

	var top = $(document).scrollTop()
	top = top > 0 ? Math.ceil(top) : Math.floor(top)
	if (top <= 400) {
		$('.Top').stop().slideUp(500)
	}
	if (top >= 400) {
		$('.Top').stop().slideDown(500)
	}
	if (top >= 400) {
		$('.content_one>.banxin img').fadeIn().addClass('one_show')
		$('.one_text').fadeIn().addClass('one_show')
	}

	if (top >= 800) {
		$('.content_two>.banxin>*').fadeIn().addClass('two_show')
	}

	if (top >= 1500) {
		$('.item>li>*').addClass('three_show3')
	}

	if (top >= 2300) {
		$('.four_border').fadeIn().css('left', '0')
		$('.four_border>*').fadeIn().css('margin-left', '0')
		$('.item_one>*').fadeIn().css('margin-left', '0')
	}

	if (top >= 2600) {
		$('.item_two>*').fadeIn().css('margin-left', 0)
		$('.four_text').fadeIn().css('left', 0)
	}

	if (top >= 3200) {
		$('.five_text').fadeIn().addClass('five_img_show1')
		setTimeout(function() {
			$('.five_text').fadeIn().addClass('five_img_show2').removeClass('five_img_show1')
			setTimeout(function() {
				$('.five_text').fadeIn().addClass('five_img_show3').removeClass('five_img_show2')
			}, 100)
		}, 500)
	}
	if (top >= 3400) {
		$('.five_img li').each(function(index, ele) {
			$(ele).children().eq(0).fadeIn().addClass('five_img_show1')
			setTimeout(function() {
				$(ele).children().eq(0).fadeIn().addClass('five_img_show2').removeClass('five_img_show1')
				setTimeout(function() {
					$(ele).children().eq(0).fadeIn().addClass('five_img_show3').removeClass('five_img_show2')
				}, 100)
			}, 500)
		})
	}
	if (top >= 3500) {
		$('.five_img li').each(function(index, ele) {
			$(ele).children().eq(1).fadeIn().addClass('five_img_show1')
			$('.box').fadeIn()
			setTimeout(function() {
				$(ele).children().eq(1).fadeIn().addClass('five_img_show2').removeClass('five_img_show1')
				setTimeout(function() {
					$(ele).children().eq(1).fadeIn().addClass('five_img_show3').removeClass('five_img_show2')
				}, 100)
			}, 500)
		})
	}

	if (top >= 4400) {
		if (flag) {
			$('.bigbox').stop().animate({
				'margin-left': '-10px'
			}, 500, function() {
				$('.bigbox').animate({
					'margin-left': '10px'
				}, 100, function() {
					$('.bigbox').animate({
						'margin-left': '0'
					}, 100, function() {
						flag = false
					})
				})
			})

		}
	}
})

//

$(function() {
	var content_one_Img = $('.content_one>.banxin img')
	var content_two_Img = $('.content_two>.banxin a')
	var content_three_item = $('.item>li a')

	hover(content_one_Img, 'left')
	hover(content_two_Img, 'right', 40)

	$.each(content_three_item, function(index, eve) {
		hover(eve, 'margin-left')
	})


	function hover(Img, move, num = -20) {
		$(Img).css('transition', 'all .8s')
		$(Img).hover(function() {
			$(Img).css(move, num + "px");
		}, function() {
			$(Img).css(move, "0");
		})
	}

	$('.right>div .input1,.right>div .input2,.right>div .input3').click(function() {
		$('.right>span').css({
			opacity: 0,
			transition: 'all 0.5s'
		})
	})
	$('.right>input').click(function() {
		var userName = $('.right .input1').val().trim();
		var userTitle = $('.right .input2').val().trim();
		var userContent = $('.right .input3').val().trim();
		if (!userName) {
			$('.right>span').text('请输入姓名')
			$('.right>span').css({
				color: 'red',
				opacity: 1
			})
			return false
		}
		if (!userTitle) {
			$('.right>span').text('请输入电话')
			$('.right>span').css({
				color: 'red',
				opacity: 1
			})
			return false
		}
		if (!userContent) {
			$('.right>span').text('请输入内容')
			$('.right>span').css({
				color: 'red',
				opacity: 1,
			})
			return false
		}
		$('.right>span').css({
			opacity: 1,
		})
		$('.right .input1').val('')
		$('.right .input2').val('')
		$('.right .input3').val('')
		alert('提交成功')
	})

	$('.Top').on('click', function() {
		$('html,body').animate({
			scrollTop: 0
		}, 500)
	})
})
