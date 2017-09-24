$(function(){
	/*限制文本框输入的长度*/
    $("#txt").keyup(function(){  
       if($("#txt").val().length > 30){
            $(this).css('disabled', 'disabled');
           $("#txt").val( $("#txt").val().substring(0,30) );
       }
    });

    $('#save').click(function() {
        var val = $('#txt').val();
        if(val == '不要超过30个字！'){
            val = "请输入文字";
            return false;
        }
        else {
            $('#txt').val(val);
            return true;
        }
        return false;
    });
})
