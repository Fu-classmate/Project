$(function(){
    $('#button').click(function(){
        var input1=$('#input1').val().trim()
        var input2=$('#input2').val().trim()
        var input3=$('#input3').val().trim()
        if(!input1){
            $('.spanyan').text('请输入姓名').css({'opacity':1,'transition': 'all 0.5s'});
            return false
            
        }
        if(!input2){
            $('.spanyan').text('请输入电话').css({'opacity':1,'transition': 'all 0.5s'});
            return false
        }
        if(!input3){
            $('.spanyan').text('请输入内容').css({'opacity':1,'transition': 'all 0.5s'});
            return false
        }

    })
    
   
})