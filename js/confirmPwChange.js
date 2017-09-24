$(function(){
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
            $('.userPass').fadeIn(1000).fadeOut(1000);
            confirm = 1;
            return false;
        }
        if(confirmPass.length > 16)
        {
            $('.exceed').fadeIn(1000).fadeOut(1000);
            $("#confirmPass").val("");
            confirm = 1;
            return false;
        }
        if(confirmPass.length < 6)
        {
            $('.less').fadeIn(1000).fadeOut(1000);
            $("#confirmPass").val("");
            confirm = 1;
            return false;
        }
        if(confirm == 0){
            return true;
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
})