/**
 * Created by danielhuang on 9/4/17.
 */
$("#con-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#concert").offset().top
    }, 2000);
});
$("#film-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#film").offset().top
    }, 2000);
});
$("#fes-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#festival").offset().top
    }, 2000);
});
$("#about-cec-cac-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#about-cec-cac").offset().top
    }, 2000);
});
$("#lot-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#lottery-FAQ").offset().top
    }, 2000);
});