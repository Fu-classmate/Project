$(function () {
    //刷新页面时让页面从头显示
    // window.onbeforeunload = function () {
    //     document.documentElement.scrollTop = 0;  //ie下
    //     document.body.scrollTop = 0;  //非ie
    // }
    // 鼠标移入淘宝小图标时向左偏移
    $('.sectionTop img').mouseover(function () {
        $(this).stop().animate({ left: '-10px' })
    })
    $('.sectionTop img').mouseout(function () {
        $(this).stop().animate({ left: '0px' })
    })
    // 页面加载时让淘宝小图标执行动画
    $('.sectionTop>a').stop().animate({ 'left': '-10px' }, 500, function () {
        $('.sectionTop>a').animate({ 'left': '10px' }, 100, function () {
            $('.sectionTop>a').animate({ 'left': '0' }, 100)
        })
    })
    //点击回到顶部
    $('#backTop').click(function () {
        // $(document).scrollTop(0)     //直接回到顶部
        $('html,body').animate({ scrollTop: 0 }, 500)
    })
    //鼠标移入时变透明
    $('#backTop').mouseover(function () {
        $(this).stop().animate({ opacity: 0.2 }, 500)
    })
    //鼠标移出时显示
    $('#backTop').mouseout(function () {
        $(this).stop().animate({ opacity: 1 }, 500)
    })
    //页面往下滚动时实时触发
    var flag1=true
    var flag2=true
    var flag3=true
    var flag4=true
    var flag5=true
    var flag6=true
    var flag7=true
    var flag8=true
    var flag9=true
    var flag10=true
    var flag11=true
    var flag12=true
    var flag13=true
    var flag14=true
    $(window).scroll(function () {
        //获取到页面被卷上去的距离
        var a = Math.floor($(document).scrollTop());
        //根据被卷上去的距离判断下面的元素是否触发显示动画
        if (a == 0) {
            $('#backTop').stop().slideUp(500)
        }else{
            $('#backTop').stop().slideDown(500)
        }
        if(flag1){
            if (a >= 100 && a <= 800) {
                move('.sectionTop>div')
                flag1=false
            }
        }
        if(flag2){
            if (a >=400 && a<=1700) {
                move('.oneBox .imgLeft,.oneBox h1')
                flag2=false
            }
        }
        if(flag3){
            if (a >=500 && a<=1100) {
                move('.oneBox p')
                flag3=false
            }
        }
        if(flag4){
            if (a >=600 && a<=1500) {
                move('.oneBox .img1')
                flag4=false
            }
        }
        if(flag5){
            if (a >1100 && a<=1900) {
                move('.oneBox .img2')
                flag5=false
            }
        }
        if(flag6){
            if (a >= 1600 && a<=3000) {
                move('.twoBox .imgLeft,.twoBox h1')
                flag6=false
            }
        }
        if(flag7){
            if (a >=1700 && a<=2300) {
                move('.twoBox p')
                flag7=false
            }
        }
        if(flag8){
            if (a >=1800 && a<=2700) {
                move('.twoBox .img1')
                flag8=false
            }
        }
        if(flag9){
            if (a >= 2300 && a<=3100) {
                move('.twoBox .img2')
                flag9=false
            }
        }
        if(flag10){
            if (a >= 2700 && a<=4300) {
                move('.threeBox .imgLeft,.threeBox h1')
                flag10=false
            }
        }
        if(flag11){
            if (a >= 2800 && a<=3500) {
                move('.threeBox p')
                flag11=false
            }
        }
        if(flag12){
            if (a >= 2900 && a<=3900) {
                move('.threeBox .img1')
                flag12=false
            }
        }
        if(flag13){
            if (a >= 3400 && a<=4300) {
                move('.threeBox .img2')
                flag13=false
            }
        }
        if(flag14){
            if (a >= 3900) {
                $('.box').stop().animate({ 'margin-left': '-10px' }, 500, function () {
                    $('.box').animate({ 'margin-left': '10px' }, 100, function () {
                        $('.box').animate({ 'margin-left': '0' }, 100)
                    })
                })
                flag14=false
            }
        }
    })
    // 联系我们功能
    $('.right>div .input1,.right>div .input2,.right>div .input3').click(function(){
        $('.right>span').css({opacity:0,transition:'all 0.5s'})
    })
    $('.right>input').click(function(){
        var userName=$('.right .input1').val().trim();
        var userTitle=$('.right .input2').val().trim();
        var userContent=$('.right .input3').val().trim();
        if(!userName){
            $('.right>span').text('请输入姓名')
            $('.right>span').css({opacity:1,transition:'all 0.5s'})
            return false
        }
        if(!userTitle){
            $('.right>span').text('请输入电话')
            $('.right>span').css({opacity:1,transition:'all 0.5s'})
            return false
        }
        if(!userContent){
            $('.right>span').text('请输入内容')
            $('.right>span').css({opacity:1,transition:'all 0.5s'})
            return false
        }
        alert('提交成功')
        $('.right .input1').val('')
        $('.right .input2').val('')
        $('.right .input3').val('')
    })

    // 封装函数
    function move(a) {
        $(a).stop().animate({ 'left': '-10px' }, 500, function () {
            $(a).animate({ 'left': '10px' }, 100, function () {
                $(a).animate({ 'left': '0' }, 100)
            })
        })
    }
})