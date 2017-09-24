$(function(){
	/*等待通过 已晋级 已淘汰 切换*/
	$('#status span').click(function() {
		$(this).addClass('des').siblings().removeClass('des');
		var suoyin = $(this).index();
		console.log(suoyin);
		$('.waitList').eq(suoyin).addClass('waitListShow');
		$('.waitList').eq(suoyin).siblings().removeClass('waitListShow');
	});

	/*删除*/
	$('.del').click(function() {
		$('.deleteBg').addClass('deleteBgShow');
		$('.deleteList').addClass('deleteListShow');
	});
	$('.determine,.quxiao').click(function() {
		$('.deleteBg').removeClass('deleteBgShow');
		$('.deleteList').removeClass('deleteListShow');
	});
	$('#sureDel').click(function() {
		$(this).parents('li').css('display', 'none');
	});

	/*同意*/
	$('.agree').click(function() {
		$('.agreeBg').addClass('agreeBgShow');
		$('.agreeList').addClass('agreeListShow');
	});
	$('.determine,.quxiao').click(function() {
		$('.agreeBg').removeClass('agreeBgShow');
		$('.agreeList').removeClass('agreeListShow');
	});

	/*恢复*/
	$('.recovery').click(function() {
		$('.recoverBg').addClass('recoverBgShow');
		$('.recoverList').addClass('recoverListShow');
	});
	$('.determine,.quxiao').click(function() {
		$('.recoverBg').removeClass('recoverBgShow');
		$('.recoverList').removeClass('recoverListShow');
	});
	$('#sureDel').click(function() {
		$(this).parents('li').css('display', 'none');
	});

	/*淘汰*/
	$('.eliminate').click(function() {
		$('.eliminateBg').addClass('eliminateBgShow');
		$('.eliminateList').addClass('eliminateListShow');
	});
	$('.determine,.quxiao').click(function() {
		$('.eliminateBg').removeClass('eliminateBgShow');
		$('.eliminateList').removeClass('eliminateListShow');
	});

	/*分享*/
	/*$('#share').click(function() {
		$('.shareBg').addClass('shareBgShow');
		$('.shareAPP').addClass('shareAPPShow');
	});
	$('.cancel').click(function() {
		$('.shareBg').removeClass('shareBgShow');
		$('.shareAPP').removeClass('shareAPPShow');
	});*/

	/*清除数据*/
	$('#clear').click(function() {
		$('.clearBg').addClass('clearBgShow');
		$('.clearList').addClass('clearListShow');
	});
	$('.determine,.quxiao').click(function() {
		$('.clearBg').removeClass('clearBgShow');
		$('.clearList').removeClass('clearListShow');
	});
	/*删除活动*/
	$('#del').click(function() {
		$('.delBg').addClass('delBgShow');
		$('.delList').addClass('delListShow');
	});
	$('.determine,.quxiao').click(function() {
		$('.delBg').removeClass('delBgShow');
		$('.delList').removeClass('delListShow');
	});
})