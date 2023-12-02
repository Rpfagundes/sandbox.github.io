document.addEventListener("DOMContentLoaded", function(){
  var toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
  var nav = document.getElementsByTagName('nav')[0];
  var menu = document.getElementById('navbar-default');
  var iconBar = toggleButton.querySelector('.fa-bars');
  var iconX = toggleButton.querySelector('.fa-times');

  toggleButton.addEventListener('click', function() {
    var isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', !isExpanded);
    menu.classList.toggle('hidden');
    iconBar.classList.toggle('hidden');
    iconX.classList.toggle('hidden');
  });

  window.addEventListener('scroll', function() {
    if(window.scrollY > 0) {
      nav.classList.add('shadow-lg');
    } else {
      nav.classList.remove('shadow-lg');
    }
  });

  $('.anchor').click(function () {
    divId = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(divId).offset().top - 72
    }, 300);
  });

  $('.anchor').click(function() {
    var isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', !isExpanded);
    menu.classList.toggle('hidden');
    iconBar.classList.toggle('hidden');
    iconX.classList.toggle('hidden');
  });
});