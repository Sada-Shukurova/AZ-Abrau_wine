const nav = document.querySelector('header');
// nav
const navTop = nav.offsetTop;
window.addEventListener('scroll', function () {
    (window.scrollY >= navTop) ? nav.classList.add('sticky-header') : nav.classList.remove('sticky-header');
})



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
                items: 1
            },
            768: {
                items: 3,
                margin: 10
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        },
        stagePadding: 50,
        nav: true,
        navText: ['<', '>'],
        dots: false

    });
});
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

// filter brightness on image on mouseenter

// left
$(".brands-txt-left .brands-btn").mouseenter(function () {
    $("#grapes-img").css({ "filter": "brightness(0.4)" })
})
$(".brands-txt-left .brands-btn").mouseleave(function () {
    $("#grapes-img").css({ "filter": "brightness(1)" })
})
// right
$('.brands-txt-right .brands-btn').mouseenter(function () {
    $('#grape-garden').css({ 'filter': 'brightness(0.4)' })
})
$('.brands-txt-right .brands-btn').mouseleave(function () {
    $('#grape-garden').css({ 'filter': 'brightness(1)' })
})
// ----------

// swiper
let newsSwiper = new Swiper(".news-swiper", {
    loop:true,
    slidesPerView: 3,
    breakpoints: {
        1024:{
            slidesPerView:3,
        },
      640: {
        slidesPerView: 2,
      },
      450: {
        slidesPerView: 1,
      }
    },
    // autoplay: {
    //     delay: 2000,
    //   },
      spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });