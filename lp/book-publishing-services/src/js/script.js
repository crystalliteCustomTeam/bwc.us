// =============== header =============== //
const header = document.getElementById('header');

window.addEventListener('scroll', function () {
  if (window.scrollY >= 50) {
    header.classList.add('fixedHeader');
  } else {
    header.classList.remove('fixedHeader');
  }
});
// =============== Mobile nav =============== //
let openMenu = document.querySelector(".navbar-toggle");
let sideMenu = document.querySelector(".menu");
let closeMenu = document.querySelector(".navbar-close");

openMenu.addEventListener("click", function () {
  sideMenu.style.left = "0%";
});

closeMenu.addEventListener("click", function () {
  sideMenu.style.left = "-100%";
});
//================= Booking =================
$('.client-logo').slick({
  infinite: true,
  dots: false,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});
//================= CaseStudy =================
$('.caseStudiesSliderTab').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
document.addEventListener('DOMContentLoaded', function () {
  const bookTabs = document.querySelectorAll('.caseStudiesTab .border');
  const bookContents = document.querySelectorAll('.bookcontent');

  bookTabs.forEach(tab => {
    tab.addEventListener('click', function () {
      // Remove active class from all tabs and contents
      bookTabs.forEach(tab => tab.classList.remove('active'));
      bookContents.forEach(content => content.classList.remove('active'));

      // Add active class to the clicked tab and its corresponding content
      this.classList.add('active');
      const targetContent = document.querySelector(this.dataset.target);
      targetContent.classList.add('active');
    });
  });
});
//================= Service =================
$('.serviceSlider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
});
//================= Portfolio =================
$('.actionAdventure').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerPadding: "50px 0px 80px",
      }
    }
  ]
});
// ================== Tabs ====================
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".portfolioTabs");
  const contents = document.querySelectorAll(".portfolioContent");

  tabs.forEach(tab => {
    tab.addEventListener("click", function () {
      tabs.forEach(tab => tab.classList.remove("active"));
      contents.forEach(content => content.classList.remove("active"));
      $('.actionAdventure').slick('refresh');

      tab.classList.add("active");
      document.getElementById(tab.getAttribute("data-target")).classList.add("active");
    });
  });
});
//================= Method =================
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".listBox");
  const contents = document.querySelectorAll(".listContent");

  tabs.forEach(tab => {
    tab.addEventListener("click", function () {
      tabs.forEach(tab => tab.classList.remove("active"));
      contents.forEach(content => content.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(tab.getAttribute("data-target")).classList.add("active");
    });
  });
});
//================= ProcessPro =================
$('.processSlideTab').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerPadding: "50px 0px 80px",
      }
    }
  ]
});
document.addEventListener("DOMContentLoaded", function () {
  const ProcessTabs = document.querySelectorAll(".process-pro-item");
  const ProcessContents = document.querySelectorAll(".process-pro-Content");

  ProcessTabs.forEach(tab => {
    tab.addEventListener("click", function () {
      ProcessTabs.forEach(tab => tab.classList.remove("active"));
      ProcessContents.forEach(content => content.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(tab.getAttribute("data-target")).classList.add("active");
    });
  });
});
//================= Testimonial =================
$('.clientReview').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  arrows: true,
  autoplaySpeed: 5000,
  infinite: true,
  autoplay: true,
  centerMode: true,
  centerPadding: "0",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.clientReview2').slick({
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  autoplaySpeed: 5000,
  infinite: true,
  autoplay: true,
  adaptiveHeight: true,
  centerMode: true,
  centerPadding: "0",
});