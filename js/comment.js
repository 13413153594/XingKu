$(function(){
	/*提示信息*/
	$('#commentBtn').click(function() {
		var confirm = 0;
        var $val=$('#comment').val();
        if($val == '' || $val == '请输入内容！'){
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