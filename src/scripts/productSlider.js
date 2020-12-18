$(document).ready(function () {
    $('.product-photo-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 600,
        cssEase: 'ease-in-out',
        autoplaySpeed: 4500,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        dots: true,
        arrows: false,
        dotsClass: 'slick-dots product-slider-dots',
        pauseOnHover: false,
        touchMove: false,
        swipe: false,
    });
});