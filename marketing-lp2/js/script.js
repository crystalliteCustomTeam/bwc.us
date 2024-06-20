// Header Scroll Start
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.lpHeader');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            header.classList.add('scrolled')
        } else {
            header.classList.remove('scrolled');
        }
    });
});

$('.banner-slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
});
$('.brandsSlider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    cssEase: 'linear',
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1099,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
            }
        },
    ]
});
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
    infinite: false,
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