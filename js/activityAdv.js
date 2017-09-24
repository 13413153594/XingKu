$(function(){
	$('.footer-content a').click(function(event) {
		$(this).addClass('iconDes').siblings().removeClass('iconDes');
	});

	$('.issue').click(function(event) {
		$(this).prop('src','images/main/2x/issue_selected@2x.png');
		$('.home').prop('src','images/main/2x/homeclassify@2x.png');
		$('.classify').prop('src','images/main/2x/classify_default@2x.png');
		$('.me').prop('src','images/main/2x/me_default@2x.png');
	});
	$('.me').click(function(event) {
		$(this).prop('src','images/main/2x/me_selected@2x.png');
		$('.home').prop('src','images/main/2x/homeclassify@2x.png');
		$('.classify').prop('src','images/main/2x/classify_default@2x.png');
		$('.issue').prop('src','images/main/2x/issue_default@2x.png');
	});
})