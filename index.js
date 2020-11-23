import LocomotiveScroll from '/locomotive-scroll';
import Typed from '/typed.js';

// LOCOMOTIVE SCROLL

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});
console.log('ok');


// TOOLTIP BOOTSTRAP
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();

    
  });


// TYPED JS

var typed = new Typed('.animate-title', {
    strings: [
      "",
      "A COOL DEVELOPER",
      "A CURIOUS DEVELOPER",
      "YOUR NEXT DEVELOPER"
    ],
    typeSpeed: 100,
    typeSpeed: 100,
    typeSpeed: 100,
    loop: false,
  });

 