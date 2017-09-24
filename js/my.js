$(function(){
	$('#signClick').click(function() {
		$(this).hide();
		$('.signedIn').addClass('signedInShow');
		event.stopPropagation();
	});
	$('.signedIn').click(function() {
		event.stopPropagation();
	});
	$('.head_portrait').click(function() {
		event.stopPropagation();
	});

	/*更换个人主页背景*/
	$('.header').click(function() {
		$('.backgroundBG').addClass('backgroundBGShow');
		$('.changeBackground').addClass('changeBackgroundShow');
		event.stopPropagation();
	});
	$('.backgroundBG').click(function() {
		$(this).removeClass('backgroundBGShow');
		$('.changeBackground').removeClass('changeBackgroundShow');
	});
	$('.changeBackground').click(function() {
		$(this).removeClass('changeBackgroundShow');
		$('.backgroundBG').removeClass('backgroundBGShow');
	});

	/*更换背景*/
    $('.changeBackground').click(function(event) {
        $('.headPortrait').addClass('headPortraitShow');
        $('.headPortraitType').addClass('headPortraitTypeShow');
    });
    $('.headPortrait').click(function(event) {
        $(this).removeClass('headPortraitShow');
        $('.headPortraitType').removeClass('headPortraitTypeShow');
    });
    $('.headPortraitType li').click(function(event) {
        $('.headPortrait').removeClass('headPortraitShow');
        $('.headPortraitType').removeClass('headPortraitTypeShow');
    });
})