if (window.innerWidth <= 991.98) {
  $('#navbarSupportedContent a').click(function (e) {
    $('#navbarSupportedContent').collapse('toggle');
    $('#menyAvPaa').prop('checked', false);
    $("body").toggleClass("overflow-hidden");
    $("html").toggleClass("overflow-hidden");
  });
}

var divId;

$('.anchor').click(function () {
  divId = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(divId).offset().top - 76
  }, 100);
});

$(window).scroll(function () {
  if ($(window).scrollTop() >= 1) {
    $('.navbar').addClass("scrolled");
  } else {
    $('.navbar').removeClass("scrolled");
  }
});

$('.navbar-toggler').one('click', function() {
  $('.navbar').addClass('scrolled');
});

$('.collapsed').click(function () {
  $('.navbar').addClass('scrolled');
  $(".navbar-toggler").click(function () {
    $("body").toggleClass("overflow-hidden");
    $("html").toggleClass("overflow-hidden");
  });
});

$('.navbar-toggler:not(.collapsed)').click(function () {
  $('.navbar').removeClass('scrolled');
});