const nav = document.querySelector('header');
// nav
const navTop = nav.offsetTop;
window.addEventListener('scroll', function() {
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
        autoplayTimeout: 2000,
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

const headerBurgerIcon=document.querySelector('.header-burger-icon')
const mobileHeader=document.querySelector('.mobile-header')

headerBurgerIcon.addEventListener('click', function(){
    mobileHeader.style.display='flex';
    headerBurgerIcon.style.display='inline-block';
    document.body.style.overflow='hidden';
})

