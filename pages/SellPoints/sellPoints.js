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


// swiper
let swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 3,
    mousewheel: {
        invert: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});


// ------------------

document.addEventListener("DOMContentLoaded", getSellPoints)


const swiperWrapper = document.querySelector(".swiper-wrapper");

function getSellPoints() {
    fetch("./sellPointDb.json")
        .then((res) => res.json())
        .then(data => {
            console.log(data)
            data.forEach((address) => {
                const { id, sellTitle, sellAddress, mobile, tel, src } = address;

                swiperWrapper.innerHTML += `
                <div class="swiper-slide">
                <h3 class="sell-slide-heading"> ${sellTitle}</h3>
                                <p class="sell-slide-address">${sellAddress}</p>
                                <a class="mobile-number" href="tel:${mobile}">${mobile}</a>
                                <a class="home-number" href="tel:${tel}">${tel}</a>
                                <a href="${src}" class="swiper-btn">Xəritədə bax</a>
                            </div>
            `
            })
        }).catch((error) => console.log(error))
}


