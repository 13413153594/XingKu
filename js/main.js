$(function(){
    /*导航切换*/
    $('.activity span').click(function() {
        var suoyin=$(this).index();
        console.log(suoyin);
        $('.advertisement').eq(suoyin).addClass('advertisementShow');
        $('.advertisement').eq(suoyin).siblings('').removeClass('advertisementShow');
    });

    $('.activity .hotActi').click(function() {
        $('.hotActi').html('<img src="images/main/2x/activity@2x.png" alt="" class="hot_activity hot_activityShow">');
        $('.newActi').html('<img src="images/main/2x/default_new_activity.png" alt="" class="default_new_activity default_new_activityShow">');
    });

    $('.activity .newActi').click(function() {
       $('.newActi').html('<img src="images/main/2x/new_activity@2x.png" alt="" class="new_activity">');
       $('.hotActi').html('<img src="images/main/2x/default_activity.png" alt="" class="default_hot_activity">');
    });

    /*选择城市*/
    $('.selectProvinceList>li').click(function() {
        var selectVal = $("#selectListVal").html();
        var index = $(this).index();
        if ($(this).html() == "全国" || $(this).html() == selectVal) {
            $(this).removeClass('des');
            $(this).siblings().removeClass('des');
        }else{
            $(this).addClass('des').siblings().removeClass('des');
        }

        
        var suoyin=$(this).index();
        console.log(suoyin);
        $('.selectCityList').eq(suoyin).addClass('selectCityListShow');
        $('.selectCityList').eq(suoyin).siblings().removeClass('selectCityListShow');
      


    });

    $('#Select').click(function() {
        $('.chengshi').addClass('chengshiShow');
        $('.select').addClass('selectShow');
    });
    $('.chengshi').click(function() {
        $(this).removeClass('chengshiShow');
        $('.select').removeClass('selectShow');
    });
    
})

window.onload=function () {

    /*城市滑动*/
    var Scroll = new iScroll('wrapper',{
        hScroll: false, /*左右滑动，默认为true*/
        vScroll: true,/*上下滑动*/
        hScrollbar: false, /*是否显示y轴滚动条，默认为显示*/
        vScrollbar: false, /*是否显示X轴滚动条，默认为显示*/
        checkDOMChanges:true
    });
    var ScrollD= new iScroll('wrapper1',{
        hScroll: false, /*左右滑动，默认为true*/
        vScroll: true,/*上下滑动*/
        hScrollbar: false, /*是否显示y轴滚动条，默认为显示*/
        vScrollbar: false, /*是否显示X轴滚动条，默认为显示*/
        checkDOMChanges:true
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
};