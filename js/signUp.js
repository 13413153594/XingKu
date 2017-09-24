$(function(){
	 /*性别*/
    $('.sexSelect').click(function(event) {
        $('.sex').addClass('sexShow');
        $('.sexType').addClass('sexTypeShow');
    });
    $('.sex').click(function(event) {
        $(this).removeClass('sexShow');
        $('.sexType').removeClass('sexTypeShow');
    });
    $(".sexclick").click(function(){
        $(".sexSelect").html($(this).html());
        $('.sex').removeClass('sexShow');
        $('.sexType').removeClass('sexTypeShow');
    })

    /*头像*/
    $('.headSelect').click(function(event) {
        $('.headPortrait').addClass('headPortraitShow');
        $('.headPortraitType').addClass('headPortraitTypeShow');
    });
    $('.headPortrait').click(function(event) {
        $(this).removeClass('headPortraitShow');
        $('.headPortraitType').removeClass('headPortraitTypeShow');
    });
    $('.headPortraitType li').click(function() {
        $('.headPortrait').removeClass('headPortraitShow');
        $('.headPortraitType').removeClass('headPortraitTypeShow');
    });

})