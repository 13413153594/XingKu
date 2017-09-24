$(function(){
	/*跳过认证*/
	$('.skip').click(function() {
		$('.skipBg').addClass('skipBgShow');
		$('.skipList').addClass('skipListShow');
	});
	$('.skipList li').click(function() {
		$('.skipBg').removeClass('skipBgShow');
		$('.skipList').removeClass('skipListShow');
	});
})