// owl carousel jquery
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 5,
    margin: 20,
    center: true,
    autoplay: true,
    autoplayTimeout: 2500,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
        margin: 10,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
    stagePadding: 50,
    nav: true,
    navText: ["<", ">"],
    dots: false,
  });
});

// filter brightness on image on mouseenter

// left
$(".brands-txt-left .brands-btn").mouseenter(function () {
  $("#grapes-img").css({ filter: "brightness(0.4)" });
});
$(".brands-txt-left .brands-btn").mouseleave(function () {
  $("#grapes-img").css({ filter: "brightness(1)" });
});
// right
$(".brands-txt-right .brands-btn").mouseenter(function () {
  $("#grape-garden").css({ filter: "brightness(0.4)" });
});
$(".brands-txt-right .brands-btn").mouseleave(function () {
  $("#grape-garden").css({ filter: "brightness(1)" });
});
// ----------

// swiper
let newsSwiper = new Swiper(".news-swiper", {
  loop: true,
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 1,
    },
  },
  autoplay: {
    delay: 2000,
  },
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
