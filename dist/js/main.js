//scrollbar
$(document).ready(function(){
    if ($(window).width() >= '768') {
      $('.scrollbar-macosx').scrollbar();
    }
});


//carousel slick
$('.carousel1').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });


$(document).ready(function(){
    if ($(window).width() <= '480') {
      $('.carousel2').slick({
        slidesToShow: 2
      });
    } else {
      $('.carousel2').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });
    }
});


let $contactForm = $(".j-contact-form");

$(".j-contact-button").click(function(e) {
  e.preventDefault();
  $contactForm.fadeIn(200);
});

$(".j-close-link").click(function(e) {
  e.preventDefault();
  $contactForm.fadeOut(200);
});


$(".j-contact-background").click(function() {
  $contactForm.fadeOut(200);
});


//burger menu
let $header = $(".j-header");

$(".j-burger-link").click(function(e) {
  e.preventDefault();
  $header.addClass("mobile-header");
});

$(".j-burger-close-link").click(function(e) {
  e.preventDefault();
  $header.removeClass("mobile-header");
});