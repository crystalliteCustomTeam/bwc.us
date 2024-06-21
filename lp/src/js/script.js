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
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});
//================= CaseStudy =================
document.addEventListener('DOMContentLoaded', function () {
  const bookTabs = document.querySelectorAll('.caseStudies .border');
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
  arrows: false,
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
  centerMode: true,
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
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
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
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  autoplaySpeed: 5000,
  infinite: true,
  autoplay: true,
  centerMode: true,
  centerPadding: "0",
});


