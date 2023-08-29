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


// const btn = document.querySelector(".change-location")
// let map = document.querySelector(".map")



// btn.addEventListener('click', function () {
//     map.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8573.975592890565!2d49.91504487031039!3d40.420405888158044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030628c1756b53b%3A0x154f5b1e67a7da69!2sKoroghlu!5e0!3m2!1sen!2saz!4v1693304636096!5m2!1sen!2saz")

// })


// swiper
let swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    slidesPerView: 3,
    spaceBetween: 10
});


// ------------------
document.addEventListener("DOMContentLoaded", getSellPoints)

const swiperWrapper = document.querySelector(".swiper-wrapper")

function getSellPoints() {
    fetch("./sellPointDb.json")
        .then((res) => res.json())
        .then(data => {
            swiperWrapper.innerHTML = "";
            console.log(data)
            data.forEach((address) => {
                const { id, sellTitle, sellAddress, mobile, tel, src } = address;

                swiperWrapper.innerHTML += `
           <div class="swiper-slide>
            < h3 class="sell-slide-heading" > ${sellTitle}</ >
            <p class="sell-slide-address">${sellAddress}</p>
            <a class="mobile-number" href="tel:${mobile}">${mobile}</a>
            <a class="home-number" href="tel:${tel}">${tel}</a>
            <a href="${src}" class="swiper-btn">Xəritədə bax</a>
            </div>
            `
            })
        }).catch((error) => console.log(error))
}


