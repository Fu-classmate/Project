$(function(){
    $('.top_list>ul>li').hover(function(){
        $(this).children('span').addClass('aStyle').fadeIn(500)
        $(this).siblings().children('span').fadeOut(500)
        console.log(1)
        $(this).children('ul').css('display','block')
    },function(){
        $(this).children('span').fadeOut(500)
        // $(this).children('span').addClass('aStyle1')
        $(this).children('ul').css('display','none')
        console.log(2)
    })


    $('.top_list .li_one li').hover(function(){
        $(this).addClass('aStyle')
        $(this).siblings().removeClass('aStyle')
        console.log(1)
        // $(this).children('ul').css('display','block')
    },function(){
        $(this).removeClass('aStyle')
        // $(this).children('span').addClass('aStyle1')
        console.log(2)
    })

    var suspHigh = $('.suspension').offset().top;
    console.log(suspHigh);
    var newSus = $('.top').offset().top *0.8;
    // $(window).scroll(function(){
    //     var winHeight = $(document).scrollTop();
    //     if(winHeight > suspHigh){
    //         $('.suspension').show(500)
    //     }else {
    //         $('.suspension').hide(500)
    //     }
    // })

    $(window).scroll(function(){
        var winHeight = $(document).scrollTop();
        if(winHeight > suspHigh){
            $('.suspension').slideDown(500,function(){
                opacity: 1;
            })
        }else {
            $('.suspension').slideUp(500,function(){
                opacity: 0;
            })
        }
    })

    // $(window).scroll(function(){
    //     var winHeight = $(document).scrollTop();
    //     if(winHeight > suspHigh){
    //         var dis = suspHigh + 10 +'px';
    //         console.log(dis)
    //        $('.suspension').css({
    //            top:dis,
    //            opacity:1,
               
    //     })
    //     }else{
    //     }
    // })
    
 
    // var img = document.querySelector('.middle_ctnt>img')
    // myanimate(img, 140, 10, 1000)

 
    // movie('.show','translateX(0)',-1) 

    $('.show').animate({},function(){
        $('.show').css({
            'transform': 'translateX(0)',
            'opacity':1  
        })
    })
  
    movie('.service .div_1','scale(1)',newSus) 
    movie('.service h1','scale(1)',newSus) 
    movie('.service .p_1','scale(1)',newSus) 

    movie('.service .ol','rotateZ(0deg)',930)    
 
    movie('.bottom_ctnt','translateX(0)',1500)

    movie('.service .img_2','translateY(0)',newSus)

function movie(ele,action,dis){

    $(window).scroll(function(){
        var winHeight = $(document).scrollTop();
        if(winHeight > dis){
           
                $(ele).animate({},function(){
                    $(ele).css({
                        'transform': action,
                        'opacity':1  
                    })
                })
           
            }
        }
    
    )
}


$('.suspension').click(function(){
    $(window).scrollTop(0)
})








})