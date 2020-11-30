$(function() {
	// 匹配找到的第一个元素所以要用  first
	$('.main_whole:first').animate({
		'margin-left': 0
	}, 700)

	$('.main_nav').on('mouseover', 'li', function() {
		var index = $(this).attr('data-index')
		var box = $('.main_whole');
		$(box[index]).animate({
			'margin-left': 0,
			'opacity': 1
		}, 700)
	})



	var shang = $('.shang').offset().top;
	// console.log(shang)
	$(window).scroll(function() {
		var cwer = $(document).scrollTop();
		// console.log(cwer)
		if (cwer>=shang  ) {
			$('.bottom_div').animate({
				'margin-left': 0
			}, 500)
			$('.biaodan_hezi').animate({
				'margin-left': 0
			}, 500)
		}
	})
})
