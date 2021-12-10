$(function (){
	let x = 0
    	$('input:password').on('input',function(){
        	if($(this).val().match(/[A-Z]/g)){
           	 $('.first').addClass('right')
        	}else{
         	$('.first').removeClass('right')
        }
    })
    $('input:password').on('input',function(){
        if($(this).val().match(/\d/g)){
            $('.second').addClass('right')
        }else{
            $('.second').removeClass('right')				
        }
    })  
    $('input:password').on('input',function(){
        if($(this).val().length >= 10){
            $('.third').addClass('right')
        }else{
            $('.third').removeClass('right')
        }
    })
    $('input:password').on('input',function(){
        if($(this).val().match(/[A-Z]/g) && $(this).val().match(/\d/g) && $(this).val().length >= 10){
            $('.red').addClass('right')
        }else{
            $('.red').removeClass('right')
        }
    })
})
