import Typed from "typed.js";

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// TOOLTIP BOOTSTRAP

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $(".scrollTo").on("click", function () {
    var page = $(this).attr("href");
    var speed = 750;
    $("html, body").animate(
      {
        scrollTop: $(page).offset().top,
      },
      speed
    );
    return false;
  });
});

// TYPED JS

var typed = new Typed(".animate-title", {
  strings: [
    "",
    "A CURIOUS DEVELOPER",
    "A COOL DEVELOPER",
    "YOUR NEXT DEVELOPER",
  ],
  typeSpeed: 100,
  typeSpeed: 100,
  typeSpeed: 100,
  loop: false,
});

document.addEventListener("DOMContentLoaded", function () {
  // Ensures this code runs after the DOM is fully loaded
  var myBtn = document.getElementById("myBtn");

  myBtn.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  });
});
