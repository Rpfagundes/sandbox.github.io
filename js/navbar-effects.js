if (window.innerWidth <= 991.98) {
  $('#navbarSupportedContent a').click(function (e) {
    $('#navbarSupportedContent').collapse('toggle');
    $('#menyAvPaa').prop('checked', false);
  });
}

var divId;

$('.anchor').click(function(){    
  divId = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(divId).offset().top - 116
  }, 100);
});