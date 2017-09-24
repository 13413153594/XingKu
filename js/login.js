$(function(){
    /*注册方式*/
    $('.zcAccount').click(function(event) {
        $('.zc').addClass('zcShow');
        $('.zcList').addClass('zcListShow');
    });
    $('.zc').click(function(event) {
        $(this).removeClass('zcShow');
        $('.zcList').removeClass('zcListShow');
    });

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
    $('.headPortraitType li').click(function(event) {
        $('.headPortrait').removeClass('headPortraitShow');
        $('.headPortraitType').removeClass('headPortraitTypeShow');
    });

    /*从手机相册选择*/
    $('.idPhoto1').click(function(event) {
        $('.select1').addClass('select1Show');
        $('.selectPhoto1').addClass('selectPhoto1Show');
    });
    $('.select1').click(function(event) {
        $(this).removeClass('select1Show');
        $('.selectPhoto1').removeClass('selectPhoto1Show');
    });
    
    $('.idPhoto2').click(function(event) {
        $('.select2').addClass('select2Show');
        $('.selectPhoto2').addClass('selectPhoto2Show');
    });
    $('.select2').click(function(event) {
        $(this).removeClass('select2Show');
        $('.selectPhoto2').removeClass('selectPhoto2Show');
    });

	$('.idPhoto3').click(function(event) {
        $('.select3').addClass('select3Show');
        $('.selectPhoto3').addClass('selectPhoto3Show');
    });
    $('.select3').click(function(event) {
        $(this).removeClass('select3Show');
        $('.selectPhoto3').removeClass('selectPhoto3Show');
    });
    /*保存昵称*/
    $('.save').click(function(event) {
        var val = $('.nameInput').val();
        if(val == ''){
            $('.nameInput').attr('placeholder','请输入文字');
            return false;
        }
        else {
            $('.nickname').html(val);
            location.href ="personalInfo.html";
            return true;
        }
        return false;
    });

    /*保存个性签名*/
    // $('#save').click(function() {
    //     var val = $('.nameText').val();
    //     if(val == ''){
    //         $.trim(val) == "";
    //         document.getElementById("txt").value="请输入文字";
    //         return false;
    //     }
    //     else {
    //         $('#signature').html(val);
    //         return true;
    //     }
    //     return false;
    // });


    /*表单验证*/  
    /*登录*/
    $('.loginBtn').click(function(event) {
        var confirm = 0;
        var num=$('#number').val();
        if(num == ''){
            $('.userNum').fadeIn(1000).fadeOut(1000);
            confirm = 1;
            return false;
        }
        var pw=$('#password').val();
        if(pw == ''){
            $('.userPass').fadeIn(1000).fadeOut(1000);
            confirm = 1;
            return false;
        }

        if(pw.length > 16)
        {
            $('.exceed').fadeIn(1000).fadeOut(1000);
            $("#password").val("");
            confirm = 1;
            return false;
        }
        if(pw.length < 6)
        {
            $('.less').fadeIn(1000).fadeOut(1000);
            $("#password").val("");
            confirm = 1;
            return false;
        }
        if(confirm == 0){
            return true;
            $('.loginBtn').css({
            'background': '#b924ff',
            'box-shadow': '0px 0px 20px #b924ff'
        });
        }
    });  

    /*登录按钮颜色*/
    $('#number,#password').keyup(function() {
        var num = $('#number').val();
        var pw = $('#password').val();
        if(num != '' && pw != ''){
            $('.loginBtn').css({
                'background': '#b924ff',
                'box-shadow': '0px 0px 20px #b924ff'
            });
        }else {
            $('.loginBtn').css({
                'background': '#aaa',
                'box-shadow': '0px 0px 20px #aaa'
            });
        }
    });

    /*个人注册按钮颜色*/
    $('#number,#password,#code').keyup(function() {
        var num = $('#number').val();
        var pw = $('#password').val();
        var code = $('#code').val();
        if(num != '' && pw != '' && code != ''){
            $('#nextBtn').css({
                'background': '#b924ff',
                'box-shadow': '0px 0px 20px #b924ff'
            });
        }else {
            $('#nextBtn').css({
                'background': '#aaa',
                'box-shadow': '0px 0px 20px #aaa'
            });
        }
    });

    /*企业注册按钮颜色*/
    $('#number,#password,#code').keyup(function() {
        var num = $('#number').val();
        var pw = $('#password').val();
        var code = $('#code').val();
        if(num != '' && pw != '' && code != ''){
            $('#nextButton').css({
                'background': '#b924ff',
                'box-shadow': '0px 0px 20px #b924ff'
            });
        }else {
            $('#nextButton').css({
                'background': '#aaa',
                'box-shadow': '0px 0px 20px #aaa'
            });
        }
    });

    /*忘记密码按钮颜色*/
    $('#number,#code').keyup(function() {
        var num = $('#number').val();
        var code = $('#code').val();
        if(num != '' && code != ''){
            $('#changeBtn').css({
                'background': '#b924ff',
                'box-shadow': '0px 0px 20px #b924ff'
            });
        }else {
            $('#changeBtn').css({
                'background': '#aaa',
                'box-shadow': '0px 0px 20px #aaa'
            });
        }
    });

    /*确认密码修改按钮颜色*/
    $('#pass,#confirmPass').keyup(function() {
        var pass = $('#pass').val();
        var confirm = $('#confirmPass').val();
        if(pass != '' && confirm != ''){
            $('#completeChange').css({
                'background': '#b924ff',
                'box-shadow': '0px 0px 20px #b924ff'
            });
        }else {
            $('#completeChange').css({
                'background': '#aaa',
                'box-shadow': '0px 0px 20px #aaa'
            });
        }
    });
     
    /*个人注册*/
    $('#nextBtn').click(function() {
        var confirm = 0;
        var num=$('#number').val();
        if(num == ''){
            $('.userNum').fadeIn(1000).fadeOut(1000);
            confirm = 1;
            return false;
        }
        var code=$('#code').val();
        if(code == ''){
            $('.userCode').fadeIn(1000).fadeOut(1000);
            confirm = 1;
            return false;
        }
        var pw=$('#password').val();
        if(pw == ''){
            $('.userPass').fadeIn(1000).fadeOut(1000);
            confirm = 1;
            return false;
        }
        if(pw.length > 16)
        {
            $('.exceed').fadeIn(1000).fadeOut(1000);
            $("#password").val("");
            confirm = 1;
            return false;
        }
        if(pw.length < 6)
        {
            $('.less').fadeIn(1000).fadeOut(1000);
            $("#password").val("");
            confirm = 1;
            return false;
        }
        if(confirm == 0){
            return true;
        }
        
    }); 

    /*企业注册*/
    $('#nextButton').click(function() {
        var confirm = 0;
        var num=$('#number').val();
        if(num == ''){
            $('.userNum').fadeIn(1000).fadeOut(1000);
            confirm = 1;
            return false;
        }
        var code=$('#code').val();
        if(code == ''){
            $('.userCode').fadeIn(1000).fadeOut(1000);
            confirm = 1;
            return false;
        }
        var pw=$('#password').val();
        if(pw == ''){
            $('.userPass').fadeIn(1000).fadeOut(1000);
            confirm = 1;
            return false;
        }
        if(pw.length > 16)
        {
            $('.exceed').fadeIn(1000).fadeOut(1000);
            $("#password").val("");
            confirm = 1;
            return false;
        }
        if(pw.length < 6)
        {
            $('.less').fadeIn(1000).fadeOut(1000);
            $("#password").val("");
            confirm = 1;
            return false;
        }
        if(confirm == 0){
            return true;
        }
    }); 

    /*忘记密码*/
    $('#changeBtn').click(function() {
        var confirm = 0;
        var num=$('#number').val();
        if(num == ''){
            $('.userNum').fadeIn(1000).fadeOut(1000);
            confirm = 1;
            return false;
        }
        var code=$('#code').val();
        if(code == ''){
            $('.userCode').fadeIn(1000).fadeOut(1000);
            confirm = 1;
            return false;
        }
        if(confirm == 0){
            return true;
        }
    }); 

    /*确认密码*/
    $('#completeChange').click(function() {
        var confirm = 0;
        var pw=$('#pass').val();
        if(pw == ''){
            $('.userPass').fadeIn(1000).fadeOut(1000);
            confirm = 1;
            return false;
        }
        if(pw.length > 16)
        {
            $('.exceed').fadeIn(1000).fadeOut(1000);
            $("#pass").val("");
            confirm = 1;
            return false;
        }
        if(pw.length < 6)
        {
            $('.less').fadeIn(1000).fadeOut(1000);
            $("#pass").val("");
            confirm = 1;
            return false;
        }

        var confirmPass=$('#confirmPass').val();
        if(confirmPass == ''){
            $('.confirmUserpass').fadeIn(1000).fadeOut(1000);
            confirm = 1;
            return false;
        }
        if(confirmPass != pw){
            $('.noSame').fadeIn(1000).fadeOut(1000);
            $("#confirmPass").val("");
            confirm = 1;
            return false;
        }
        
        if(confirm == 0){
            return true;
        }
    }); 
})