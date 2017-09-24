$(function(){

	$('.allActi>li').click(function() {
		$(this).addClass('current');
		$(this).siblings('').removeClass('current');
		var suoyin=$(this).index();
		console.log(suoyin);
		$('.advertisement').eq(suoyin).addClass('advertisementShow');
		$('.advertisement').eq(suoyin).siblings('').removeClass('advertisementShow');
	});
})

/*导航栏滑动*/
window.onload=function () {
	var Scroll = new iScroll('wrapper',{
		hScroll: true, /*左右滑动，默认为true*/
		vScroll: false,/*上下滑动*/
		hScrollbar: false, /*是否显示y轴滚动条，默认为显示*/
		vScrollbar: false, /*是否显示X轴滚动条，默认为显示*/
        checkDOMChanges:true
	});
}