
var container = document.querySelector('.contenedor');
var msnry = new Masonry( container, {
  // options
  itemSelector: '.elemento'
});


/*$(document).ready(function(){
    $('.movible').hover(function() {
        $(this).animate({
            paddingLeft: "60px"
        },{
            duration: 1000,
        });
    },function() {
        $(this).animate({
            paddingLeft: "5px"
        },{
            duration: 1000,
        });
});




