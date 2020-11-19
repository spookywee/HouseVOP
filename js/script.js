new WOW().init();

$('.menu-btn__open').click(function () {
    $('.menu ul').css('right', '0');
})
$('.menu-btn__close').click(function () {
    $('.menu ul').css('right', '-500px');
})

$(function ($) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 140) {
            $('nav').addClass('nav__fixed');
            $('nav').css('top', '0px');
        } else if ($(this).scrollTop() < 140) {
            $('nav').removeClass('nav__fixed');
            $('nav').css('top', '-100px');
        }
    });
});

$('.scroll-animate').click(function () {
    $('html, body').animate({
        scrollTop: $('.advantages').offset().top
    }, 600);
});