$(function(){
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
	$('.taotai').click(function() {
		$('.eliminateBg').addClass('eliminateBgShow');
		$('.eliminateList').addClass('eliminateListShow');
	});
	$('.determine,.quxiao').click(function() {
		$('.eliminateBg').removeClass('eliminateBgShow');
		$('.eliminateList').removeClass('eliminateListShow');
	});

})