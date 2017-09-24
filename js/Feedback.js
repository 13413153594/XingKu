$(function(){
	/*文本域输入*/
	$("#feedback").keyup(function(){  
        if($("#feedback").val().length > 200){
            $(this).css('disabled', 'disabled');
           $("#feedback").val( $("#feedback").val().substring(0,200) );
        }
    });

	/*提示信息*/
	$('#submitBtn').click(function() {
		var confirm = 0;
        var $val=$('#feedback').val();
        if($val == '' || $val == '请输入反馈，我们将为您不断改进'){
            $('#fail').fadeIn(1000).fadeOut(1000);
            confirm = 1;
            return false;
        }
        if($val != ''){
            $('#succeed').fadeIn(1000).fadeOut(1000);
            confirm = 1;
            return false;
        }
	});
})