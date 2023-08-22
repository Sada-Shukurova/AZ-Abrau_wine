// sticky nav
const nav = document.querySelector('header');
// nav
const navTop = nav.offsetTop;
window.addEventListener('scroll', function () {
    (window.scrollY >= navTop) ? nav.classList.add('sticky-header') : nav.classList.remove('sticky-header');
})

// mobile navigation
const headerBurgerIcon = document.querySelector('.header-burger-icon')
const mobileHeader = document.querySelector('.mobile-header')
const mobileCloseIcon = document.querySelector('.mobile-close-icon')
const mobileNav = document.getElementById('mobile-nav')
const mobileSocial = document.getElementById('mobile-social')

headerBurgerIcon.addEventListener('click', function () {
    mobileHeader.style.transform = 'translate(0)';
    mobileCloseIcon.style.display = 'inline-block';
    document.body.style.overflow = 'hidden';
    mobileNav.style.opacity = '1';
    mobileSocial.style.opacity = '1';
})

mobileCloseIcon.addEventListener('click', function () {
    mobileCloseIcon.style.transform = 'translate(0)';
    mobileHeader.style.transform = 'translate(100%)';
    document.body.style.overflow = 'visible';
    mobileNav.style.opacity = '0';
    mobileSocial.style.opacity = '0';
})
// ------------------




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