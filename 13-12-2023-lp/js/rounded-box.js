if ($(window).width() < 768) {
    $('.__circleSlider').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
}