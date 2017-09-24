$(function(){
	$('.price>li').click(function() {
		$(this).addClass('des').siblings().removeClass('des');
	});
	/*提示信息*/
	var i = 0;
	$('#rechargeBtn').click(function() {
		if(i % 2 ==0){
			$('.succeed').fadeIn(1000).fadeOut(1000);
		}else{
			$('.fail').fadeIn(1000).fadeOut(1000);
		}
		i++;
	});
})