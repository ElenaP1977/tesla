$(function () {
    $('.slider').slick({
        dots: true,
        arrows: false,
        autoplay: 3000,
        infinite: true,
        fade: true,
    });

    $('.header-btn').on('click', function () {
        $('.menu').addClass('active');
    });

    $('.close-btn').on('click', function () {
        $('.menu').removeClass('active');
    });



});