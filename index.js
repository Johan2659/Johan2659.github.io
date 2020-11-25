import LocomotiveScroll from 'locomotive-scroll';
import Typed from 'typed.js';

//LOCOMOTIVE SCROLL

// const scroll = new LocomotiveScroll({
//   el: document.getElementByI('[data-scroll-container]'),
//   smooth: true
// });
// console.log('ok');

// TOOLTIP BOOTSTRAP
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();

    $('.scrollTo').on('click', function() { 
			var page = $(this).attr('href'); 
			var speed = 750; 
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); 
			return false;
    });
    
  });

// $(function() {
//     $("html, body").animate({scrollTop : 0}, 1500);
// });

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
