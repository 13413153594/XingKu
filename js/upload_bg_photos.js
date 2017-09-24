function preview1(file) {
    var img = new Image(), url = img.src = URL.createObjectURL(file)
    var $img = $(img)
    img.onload = function() {
        URL.revokeObjectURL(url);
       /* var newUrl = url.substr(url.indexOf(":")+1);
        alert(newUrl);
        console.log(newUrl);*/
         $(".header").css('background-image','url('+url+')');
        
         
    }
}
function preview2(file) {
    var reader = new FileReader()
    reader.onload = function(e) {
        /*var $img = $('<img>').attr("src", e.target.result)
        $('#preview').empty().append($img);*/
        $(".header").css('background-image','url('+e.target.result+')');
    }
    reader.readAsDataURL(file);
}
$(function() {
    $('[type=file]').change(function(e) {
        var file = e.target.files[0]
        preview2(file);
    })
})