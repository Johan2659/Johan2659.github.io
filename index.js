import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});
console.log('ok');

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });
 