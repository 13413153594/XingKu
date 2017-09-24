$(function(){
	$('.certificate').click(function() {
		$('.certificateType').addClass('certificateTypeShow');
		$('.certificateTypeList').addClass('certificateTypeListShow');
	});
	$('.certificateType').click(function() {
		$(this).removeClass('certificateTypeShow');
		$('.certificateTypeList').removeClass('certificateTypeListShow');
	});
})