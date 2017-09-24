$(function(){
     /*上传互活动封面*/
    $('.camera').click(function(event) {
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

	/*活动类型*/
	$('#activeType').click(function() {
		$('.active').addClass('activeShow');
        $('.activeList').addClass('activeListShow');
	});
	$('.active').click(function() {
        $(this).removeClass('activeShow');
        $('.activeList').removeClass('activeListShow');
    });

    // var activeVal; 
    $('.selectActive li').click(function() {
        var activeVal = $(this).html();
    	$('.activeType').html(activeVal);
    	$('.active').removeClass('activeShow');
        $('.activeList').removeClass('activeListShow');
    });
    // $('#gouSelectType').click(function() {
    //     $('.activeType').html(activeVal);
    //     $('.active').removeClass('activeShow');
    //     $('.activeList').removeClass('activeListShow');
    // });

	/*报名方式*/
    var signupVal;
    $('#signup').click(function() {
        $('.bm').addClass('bmShow');
        $('.bmList').addClass('bmListShow');
    });
    $('.bm').click(function() {
        $(this).removeClass('bmShow');
        $('.bmList').removeClass('bmListShow');
    });

    $('.bmBan').click(function() {
        signupVal = "不可报名";
    });

    $('.bmDefault').click(function() {
        signupVal = "默认报名";
    });

    $('.bmBan,.bmDefault').click(function(){
        if(signupVal == "不可报名")
        {
            $('.bm').removeClass('bmShow');
            $('.bmList').removeClass('bmListShow');
            $('.uploadPlayer').addClass('uploadPlayerShow');
        }else if(signupVal = "默认报名"){
            $('.bm').removeClass('bmShow');
            $('.bmList').removeClass('bmListShow');
            $('.uploadPlayer').removeClass('uploadPlayerShow');
        }
    })

    /*投票方式*/
    $('#vote').click(function() {
        $('.vote').addClass('voteShow');
        $('.voteList').addClass('voteListShow');
    });
    $('.vote').click(function() {
        $(this).removeClass('voteShow');
        $('.voteList').removeClass('voteListShow');
    });
    $('.voteList li').click(function() {
        $('.vote').removeClass('voteShow');
        $('.voteList').removeClass('voteListShow');
    });

    /*发布按钮*/
    // $('#publishBtn').click(function() {
        
    // });

    /*上传活动视频*/
    $('.add').click(function() {
        var $uploadInput = $("#uploadMovie").find("input");
     
        if($uploadInput.length <= 4){
            $("#uploadMovie").append('<input type="text" placeholder="请输入视频浏览地址" class="inputUrl">');
        }
        
    });
})