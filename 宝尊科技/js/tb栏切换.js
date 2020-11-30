$(function () {
    $('.main_nav>li').mouseover(function () {
        // $(this).fadeIn(500)
        $(this).addClass('main_a').siblings().removeClass('main_a')
        var currentIndex = $(this).index();
        $('.tab_con .main_whole').eq(currentIndex).css('display', 'block').siblings().css('display', 'none')
        $(this).css({'transition':'all 0.5s','background-clock':'#ffffff'})
    })

    // top 下拉框
    $('#rwott').mouseover(function(){
        $('.ul_xialakuang').css({'display': 'block'})
    }).mouseout(function(){
        $('.ul_xialakuang').css({'display':'none'})
    })























    // // 切换上一页下一页
    // $('.main_bottom').on('click','.xia',function(){
    // $('.main_div').css({'display':'none'}).html($('.main_div1').css('display','block'));
    // $('.red').html(2)
    // })

    // $('.shang').click(function(){
    //     $('.main_div').html($('.main_div'));
    //     $('.red').html(1)
    // })


    // $('.main_bottom').on('click','.xia',function(){
    // $('.main_div').html($('.main_div2').css('display','block'));
    // $('.red').html(2)
    // })
    
})