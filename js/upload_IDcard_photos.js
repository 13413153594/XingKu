function preview1(file) {
    var img = new Image(), url = img.src = URL.createObjectURL(file)
    var $img = $(img)
    img.onload = function() {
        URL.revokeObjectURL(url)
        $('#preview').empty().append($img)
        }
    }
   /* function preview2(file) {
    var reader = new FileReader()
    reader.onload = function(e) {
        var $img = $('<img>').attr("src", e.target.result)
        $('#preview').empty().append($img)
    }
    reader.readAsDataURL(file)
}*/
 
$(function() {
    $('#selectImg1').change(function(e) {
        var file = e.target.files[0]
       /* preview1(file)*/
      	var img = new Image(), url = img.src = URL.createObjectURL(file)
        var $img = $(img)
        img.onload = function() {
            URL.revokeObjectURL(url)
            $('#getImg1').empty().append($img)
        }
        $('.select1').removeClass('select1Show');
		$('.selectPhoto1').removeClass('selectPhoto1Show');
    })
    $('#selectImg2').change(function(e) {
        var file = e.target.files[0]
       /* preview1(file)*/
      	var img = new Image(), url = img.src = URL.createObjectURL(file)
        var $img = $(img)
        img.onload = function() {
            URL.revokeObjectURL(url)
            $('#getImg2').empty().append($img)
        }
        $('.select2').removeClass('select2Show');
		$('.selectPhoto2').removeClass('selectPhoto2Show');
    })
    $('#selectImg3').change(function(e) {
        var file = e.target.files[0]
       /* preview1(file)*/
      	var img = new Image(), url = img.src = URL.createObjectURL(file)
        var $img = $(img)
        img.onload = function() {
            URL.revokeObjectURL(url)
            $('#getImg3').empty().append($img);	                
        }
        $('.select3').removeClass('select3Show');
		$('.selectPhoto3').removeClass('selectPhoto3Show');
    })
   
})