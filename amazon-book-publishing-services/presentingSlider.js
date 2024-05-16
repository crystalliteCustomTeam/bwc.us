$('.__presentingSlider').slick({
    dots: true,
    infinite: true,
    arrows:true,
    speed: 300,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows:false,
          }
        },
    ]
})