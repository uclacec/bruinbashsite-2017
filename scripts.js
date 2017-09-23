/**
 * Created by danielhuang on 9/4/17.
 */
$("#con-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#concert").offset().top
    }, 500);
});
$("#film-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#film").offset().top-50
    }, 500);
});
$("#fes-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#festival").offset().top-100
    }, 500);
});
$("#about-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#about-cec-cac").offset().top-100
    }, 500);
});
$("#lot-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#lottery-FAQ").offset().top
    }, 1000);
});

$(document).scroll(function() {
    if ($(document).scrollTop() >= $('#concert').offset().top) {
        // user scrolled 50 pixels or more;
        $('#navbar *').css({color:'black'});
    }  else if ($(document).scrollTop()<$('#concert').offset().top) {
        $('#navbar *').css({color:'white'});
        console.log('hi');
    }
});