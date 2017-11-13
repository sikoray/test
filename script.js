

$(document).ready(function(){
    $('.play-btn').hover( function(e) {
  $('.play-btn').toggleClass("rotate");
 e.preventDefault();
});
    
    var modal = $('.custom-modal');
$('.show-modal').click(function() {
 modal.fadeIn();
});

$('.close-modal').click(function() {
 modal.fadeOut();
});
    
    


$('.close-input').click(function() {
 search.fadeOut();
});
});


