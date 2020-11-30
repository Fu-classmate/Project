$(function () {
    //刷新页面时让页面从头显示
    // window.onbeforeunload = function () {
    //     document.documentElement.scrollTop = 0;  //ie下
    //     document.body.scrollTop = 0;  //非ie
    // }
    // 京东天猫淘宝的小图标在鼠标移入的时候向左偏移
    $('.sectionTop img').mouseover(function () {
        $(this).stop().animate({ left: '-10px' })
    })
    $('.sectionTop img').mouseout(function () {
        $(this).stop().animate({ left: '0px' })
    })
    // 页面加载时，让最上面的让文字从右向左滑入
    $('section>h1,section>p').animate({ 'padding-left': '0', 'opacity': '1' })
    $('.bg>div').addClass('start');
    // 初始添加类，隐藏指定元素
    add(1, 0)
    add(2, 0)
    add(3, 0)
    add(0, 0)
    add(1, 1)
    add(2, 1)
    add(3, 1)
    // 实现回到顶部功能
    $('#backTop').click(function () {
        // $(document).scrollTop(0)     //直接回到顶部
        $('html,body').animate({ scrollTop: 0 }, 500)
    })
    $('#backTop').mouseover(function () {
        $(this).stop().animate({ opacity: 0.2 }, 500)
    })
    $('#backTop').mouseout(function () {
        $(this).stop().animate({ opacity: 1 }, 500)
    })
    // 当页面被卷走时，触发指定位置的元素的动画
    var a = 0
    var b = 0
    var flag = true
    $(window).scroll(function () {
        a = $(document).scrollTop();
        /*记录下来当前卷入的值和上一次卷入的值，比大小，就能知道鼠标是在向下滚还是在向上滚
        if(a>b){
            console.log('向下');
        }else{
            console.log('向上');
        }
        setTimeout(() => {
            b=a
        }, 0);
        */
        if (a == 0) {
            $('#backTop').stop().slideUp(500)
        }else{
            $('#backTop').stop().slideDown(500)
        }
        if (a >= 100 && a<=700) {
            $('.sectionTop a').stop().animate({ 'padding-left': '0', 'opacity': '1' })
        }
        if (a >= 200 && a<=900) {
            $('.sectionTop p,.sectionTop h3').stop().animate({ 'padding-left': '0', 'opacity': '1' })
        }
        if (a >= 600 && a<=1200) {
            $('#case>h1,#case>p').addClass('one').stop().animate({ opacity: 1 }, 500, function () {
                $('#case>h1,#case>p').addClass('two').removeClass('one').animate({}, 100, function () {
                    $('#case>h1,#case>p').addClass('three').removeClass('two').animate({}, 100, function () {
                        $('#case>h1,#case>p').addClass('end').removeClass('three')
                    })
                })
            })
        }
        if (a >=700 && a<=1500) {
            $('.bg>div').addClass('one').removeClass('start').stop().animate({ 'opacity': '1' }, 200, function () {
                $('.bg>div').addClass('two').removeClass('one').animate({ 'opacity': '0.8' }, 100, function () {
                    $('.bg>div').addClass('three').removeClass('two').animate({ 'opacity': '1' }, 100, function () {
                        $('.bg>div').addClass('end').removeClass('three')
                    })
                })
            })
            move(1, 0)
            move(2, 0)
            move(3, 0)
        }
        if (a >=1000 && a<=1900) {
            move(0, 0)
            move(1, 1)
            move(2, 1)
            move(3, 1)
        }
        if (flag) {
            if (a >=1700) {
                $('.box').stop().animate({ 'margin-left': '-10px' }, 500, function () {
                    $('.box').animate({ 'margin-left': '10px' }, 100, function () {
                        $('.box').animate({ 'margin-left': '0' }, 100,function(){
                            flag=false
                        })
                    })
                })
            }
        }
    })
    // 联系我们功能
    $('.right>div .input1,.right>div .input2,.right>div .input3').click(function () {
        $('.right>span').css({ opacity: 0, transition: 'all 0.5s' })
    })
    $('.right>input').click(function () {
        var userName = $('.right .input1').val().trim();
        var userTitle = $('.right .input2').val().trim();
        var userContent = $('.right .input3').val().trim();
        if (!userName) {
            $('.right>span').text('请输入姓名')
            $('.right>span').css({ opacity: 1, transition: 'all 0.5s' })
            return false
        }
        if (!userTitle) {
            $('.right>span').text('请输入电话')
            $('.right>span').css({ opacity: 1, transition: 'all 0.5s' })
            return false
        }
        if (!userContent) {
            $('.right>span').text('请输入内容')
            $('.right>span').css({ opacity: 1, transition: 'all 0.5s' })
            return false
        }
        alert('提交成功')
        $('.right .input1').val('')
        $('.right .input2').val('')
        $('.right .input3').val('')
    })

    // 封装函数
    function add(a, b) {
        $('.caseList').children().eq(a).children().eq(b).addClass('start')
    }
    function move(a, b) {
        $('.caseList').children().eq(a).children().eq(b).addClass('one').removeClass('start').stop().animate({ 'opacity': '1' }, 200, function () {
            $('.caseList').children().eq(a).children().eq(b).addClass('two').removeClass('one').animate({ 'opacity': '1' }, 100, function () {
                $('.caseList').children().eq(a).children().eq(b).addClass('three').removeClass('two').animate({ 'opacity': '1' }, 100, function () {
                    $('.caseList').children().eq(a).children().eq(b).addClass('end').removeClass('three')
                })
            })
        })
    }
})