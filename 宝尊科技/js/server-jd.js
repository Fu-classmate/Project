$(function () {
    //刷新页面时让页面从头显示
    // window.onbeforeunload = function () {
    //     document.documentElement.scrollTop = 0;  //ie下
    //     document.body.scrollTop = 0;  //非ie
    // }
    // 鼠标移入京东小图标时，图标向左偏移
    $('.sectionTop img').mouseover(function () {
        $(this).stop().animate({ left: '-10px' })
    })
    $('.sectionTop img').mouseout(function () {
        $(this).stop().animate({ left: '0px' })
    })
    // 进入页面时京东小图标就执行动画
    $('.sectionTop>a').stop().animate({ 'left': '-10px' }, 500, function () {
        $('.sectionTop>a').animate({ 'left': '10px' }, 100, function () {
            $('.sectionTop>a').animate({ 'left': '0' }, 100)
        })
    })
    // 回到顶部功能
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
    // 当页面被卷到指定位置的时候触发指定元素的动画
    var flag1=true
    var flag2=true
    var flag3=true
    $(window).scroll(function () {
        var a = Math.floor($(document).scrollTop());
        if (a == 0) {
            $('#backTop').stop().slideUp(500)
        }else{
            $('#backTop').stop().slideDown(500)
        }

        if(flag1){
            if (a >= 100 && a <= 800) {
                $('.sectionTop>div').stop().animate({ 'left': '-10px' }, 500, function () {
                    $('.sectionTop>div').animate({ 'left': '10px' }, 100, function () {
                        $('.sectionTop>div').animate({ 'left': '0' }, 100,function(){
                            flag1=false
                        })
                    })
                })
            }
        }
        if(flag2){
            if (a >= 500 && a <= 1400) {
                $('.sectionImg').stop().animate({ 'padding-left': '-10px' }, 500, function () {
                    $('.sectionImg').animate({ 'padding-left': '10px' }, 100, function () {
                        $('.sectionImg').animate({ 'padding-left': '0' }, 100,function(){
                            flag2=false
                        })
                    })
                })
            }
        }
        if(flag3){
            if (a >= 1200 ) {
                $('.box').stop().animate({ 'margin-left': '-10px' }, 500, function () {
                    $('.box').animate({ 'margin-left': '10px' }, 100, function () {
                        $('.box').animate({ 'margin-left': '0' }, 100,function(){
                            flag3=false
                        })
                    })
                })
            }
        }
    })
    // 联系我们板块功能
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
})