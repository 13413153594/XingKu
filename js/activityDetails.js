
$(function(){
	/*更多按钮*/
	$('#moreBtn').click(function() {
		$(this).css('display', 'none');
		$('.introductContent').css('height', 'auto');;
	});

	/*分享 举报*/
	$("#dotClick").click(function(){
	    if($('.share').hasClass("shareShow")){
	        $('.share').removeClass("shareShow");
	    }else{
	        $('.share').addClass("shareShow");
	    }    
    });
    $('.shareList li').click(function() {
    	$('.share').removeClass("shareShow");
    });
    /*举报*/
    $('#report').click(function() {
    	$('.reportBg').addClass('reportBgShow');
    	$('.reportContent').addClass('reportContentShow');
    });
    $('.reportBg').click(function() {
    	$(this).removeClass('reportBgShow');
    	$('.reportContent').removeClass('reportContentShow');
    });
    $('.ensure,.abolish').click(function() {
    	$('.reportBg').removeClass('reportBgShow');
    	$('.reportContent').removeClass('reportContentShow');
    });

	/*删除*/
	$(".del").click(function(){
		var $del = $(this).parent().parent().find(".delete");
		if($del.hasClass("deleteShow")){
			$del.removeClass("deleteShow");
		}else{
			$del.addClass("deleteShow");
		}
    });
    $('.delete').click(function() {
    	$(this).parent().parent().hide();
    });

	/*点击文字颜色切换*/
	$(".like").click(function(){
	    if($(this).hasClass("nice")){
	        $(this).removeClass("nice");
	    }else{
	        $(this).addClass("nice");
	    } 
        if($('.icon-zan').hasClass("good")){
            $(this).children('.icon-zan').removeClass("good");
        }else{
            $(this).children('.icon-zan').addClass("good");
        }     
    });

    /*图片轮播*/
    var mySwiper = new Swiper('.jd-Banner', {
        autoplay: 2000,//可选选项，自动滑动，手指触屏滑动会停止自动轮播
        autoplayDisableOnInteraction : false,//手指触屏滑动之后，重新开启自动轮播
        initialSlide :0,//初始显示的li的索引
        speed : 1000,//滑动的速度
        observer:true,//当li节点被修改的时候自动更新Swiper
        observeParents:true,//当容器container宽度改变的时候(window.onresize或者自适应)自动更新Swiper
        grabCursor : true,//鼠标抓手形状，触屏看不到
        pagination : '.swiper-pagination',//下面的图标跟随切换
        loop : true//无缝轮播 自动在li列表的前面添加最后一个，在li列表后面添加第一个
    })

    /*收藏*/
    var i = 0;
    $('.heartClick').click(function() {
        if(i%2 == 0){
            $(this).html('<img src="images/activityDetails/2x/red_heart@2x.png" alt="" class="heart-shaped">');
        }
        else {
            $(this).html('<img src="images/signupUser/2x/heart_pressed@2x.png" alt="" class="heart-shaped">');
        }
        i++;
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