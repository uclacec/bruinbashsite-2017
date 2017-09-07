---
---
$(window).scroll(function() {
  $('body').toggleClass('scrolled', window.scrollY > window.innerHeight * .9);
});

// nav links
$('header a').smoothScroll();
$('.splash a').smoothScroll();

$('.carousel').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  speed: 500,
  fade: false,
  cssEase: 'linear'
});

$('.carousel').css('max-height', window.innerHeight * .85 + 'px');
