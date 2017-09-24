move();
function move() {
    var width = window.screen.width;
    var fixedW = 640;
    var scale = width / fixedW;
    var meta = document.createElement('meta');
    meta.setAttribute('name','viewport');
    meta.setAttribute('content','width='+fixedW+',initial-scale='+scale+',maximum-scale='+scale+',user-scalable=no');
    document.head.appendChild(meta);

}

document.addEventListener('touchstart',function (e) {
    //e.preventDefault();
});

var timer=null;
window.addEventListener("resize",function(){
    clearTimeout(timer);
    timer = setTimeout( move,30);
},false);



