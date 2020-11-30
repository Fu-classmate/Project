



    $(function(){
        $('.topNav>ul>li').hover(function(){
            $(this).children('span').addClass('aStyle').fadeIn(500)
            $(this).siblings().children('span').removeClass('aStyle')
            console.log(1)
            $(this).children('ul').css('display','block')
        },function(){
            $(this).children('span').fadeOut(500)
            // $(this).children('span').addClass('aStyle1')
            $(this).children('ul').css('display','none')
            console.log(2)
        })
    
    
        $('.topNav .li_one li').hover(function(){
            $(this).addClass('aStyle')
            $(this).siblings().removeClass('aStyle')
            console.log(1)
            // $(this).children('ul').css('display','block')
        },function(){
            $(this).removeClass('aStyle')
            // $(this).children('span').addClass('aStyle1')
            console.log(2)
        })












} )