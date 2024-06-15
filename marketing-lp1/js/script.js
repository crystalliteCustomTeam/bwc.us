$('.marketing-slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    centerMode: true,
    centerPadding: '140px',
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1399,
            settings: {
                centerPadding: '40px',
            }
        },
        {
            breakpoint: 1299,
            settings: {
                centerPadding: '0px',
            }
        },
        {
            breakpoint: 1099,
            settings: {
                slidesToShow: 3,
                centerPadding: '0px',
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                centerPadding: '0px',
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                centerPadding: '0px',
            }
        },
    ]
});

$('.caseSlider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
});

$('.posrtfolioSlider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    centerMode: true,
    centerPadding: '140px',
    cssEase: 'linear',
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1399,
            settings: {
                centerPadding: '40px',
            }
        },
        {
            breakpoint: 1299,
            settings: {
                centerPadding: '0px',
            }
        },
        {
            breakpoint: 1099,
            settings: {
                slidesToShow: 3,
                centerPadding: '0px',
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                centerPadding: '0px',
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                centerPadding: '0px',
            }
        },
    ]
});
$('.streamedSlider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    centerMode: false,
    centerPadding: '0',
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1399,
            settings: {
                centerPadding: '40px',
            }
        },
        {
            breakpoint: 1299,
            settings: {
                centerPadding: '0px',
            }
        },
        {
            breakpoint: 1099,
            settings: {
                slidesToShow: 3,
                centerPadding: '0px',
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                centerPadding: '0px',
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                centerPadding: '0px',
            }
        },
    ]
});

$('.testimonials-slider').slick({
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});