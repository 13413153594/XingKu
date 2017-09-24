$(function(){
	/*分享*/
	$('#share').click(function() {
		$('.shareBg').addClass('shareBgShow');
		$('.shareAPP').addClass('shareAPPShow');
	});
	$('.cancel').click(function() {
		$('.shareBg').removeClass('shareBgShow');
		$('.shareAPP').removeClass('shareAPPShow');
	});
	$('.shareBg').click(function() {
		$(this).removeClass('shareBgShow');
		$('.shareAPP').removeClass('shareAPPShow');
	});
})