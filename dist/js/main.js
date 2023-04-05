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


//carousel slick mini
$('.carousel2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
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



