$(function(){

	$.each(city,function(index,item){
		
		if(item.name == "北京"){
			$("#countryList").append("<li class='cityClick des'>"+item.name+"</li>");
		}else{
			$("#countryList").append("<li class='cityClick'>"+item.name+"</li>");
		}
		
		
		 
	})
	$.each(city[0].sub,function(index,item){

		$("#cityList").append('<li class="selectContent"><div class="lastSelectVal">'+item.name+'</div><i class="iconfont icon-gou1 check"></i></li>');
		$("#cityList li").on("click",function(){
   				$(this).css('color', '#B924FF').siblings().css('color', '#333');
   				$(this).siblings().find(".check").removeClass('checkShow');
   				$(this).children().addClass('checkShow');
   			})
   			$('.check').on("click",function() {
		        var $val = $(this).siblings('.lastSelectVal').html();
		       	$("#selectListVal").html($val);
		     
		        $('#region').html($val);
		        /*$('.chengshi').removeClass('chengshiShow');
		        $('.select').removeClass('selectShow');*/
		    }); 
	
	})
	$(".cityClick").click(function(){
		$("#cityList").html("");
		var htmlVal = $(this).html();
		$.each(city,function(index,item){
		
			if(item.name == htmlVal){
				$.each(item.sub,function(idx,obj){

					$("#cityList").append('<li class="selectContent"><div class="lastSelectVal">'+obj.name+'</div><i class="iconfont icon-gou1 check"></i></li>');
				})
				
			}
		 
		})
		 	$("#cityList li").on("click",function(){
   				$(this).css('color', '#B924FF').siblings().css('color', '#333');
   				$(this).siblings().find(".check").removeClass('checkShow');
   				$(this).children().addClass('checkShow');
   			})
   			$('.check').on("click",function() {
		        var $val = $(this).siblings('.lastSelectVal').html();
		       	$("#selectListVal").html($val);
		     
		        $('#region').html($val);
		        /*$('.chengshi').removeClass('chengshiShow');
		        $('.select').removeClass('selectShow');*/
		    });
	
	});

   	$("#cityList li").on("click",function(){
   		$(this).css('color', '#B924FF').siblings().css('color', '#333');;
   	})

	
	
})