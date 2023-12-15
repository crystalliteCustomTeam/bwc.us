$('.__reviewSlider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    centerMode: false,
    autoplay: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false,
                infinite: true,
                arrows: true,
                centerMode: false,
                autoplay: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});