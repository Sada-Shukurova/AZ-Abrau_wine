
// fancybox video
Fancybox.bind("[data-fancybox]", {
  //custom options
});

// swiper for awards
let swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 1000,
  },
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 6,
  spaceBetween: 10,
  breakpoints: {
    0:{
      slidesPerView: 1,
      spaceBetween: 10
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    900:{
      slidesPerView: 4,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 10
    },
    1180:{
      slidesPerView: 6,
      spaceBetween: 10
    },

}});