//倒计时
function getCode(){
	$('#J_getCode').hide();
	$('#J_second').html('60');
	$('#J_resetCode').show();
	var second = 60;
	var timer = null;
	timer = setInterval(function(){
		second -= 1;
		if(second > 0 ){
			$('#J_second').html(second);
		}else{
			clearInterval(timer);
			$('#J_getCode').show();
			$('#J_resetCode').hide();
		}
	},1000);
}