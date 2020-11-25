import Typed from 'typed.js';


// TOOLTIP BOOTSTRAP

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $('.scrollTo').on('click', function () {
    var page = $(this).attr('href');
    var speed = 750;
    $('html, body').animate({
      scrollTop: $(page).offset().top
    }, speed);
    return false;
  });
});

// TYPED JS

var typed = new Typed('.animate-title', {
  strings: [
    "",
    "A CURIOUS DEVELOPER",
    "A COOL DEVELOPER",
    "YOUR NEXT DEVELOPER"
  ],
  typeSpeed: 100,
  typeSpeed: 100,
  typeSpeed: 100,
  loop: false,
});
