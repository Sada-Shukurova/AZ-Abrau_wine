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


// fetching data
document.addEventListener("DOMContentLoaded", getAllNews);

const url = "https://azabrau-backend.vercel.app/news";
const newsTop = document.querySelector(".news-top");

function getAllNews() {
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            newsTop.innerHTML = "";
            data.forEach((news) => {
                const { newsTitle,
                    newsDescription,
                    image,
                    date } = news;
                newsTop.innerHTML += `
                    <a class="linkTopSection" href="#singlenews"></a>
                <div class="news-top-left">
                    <img src="${image}" alt="wine bottle">
                </div>
                <div class="news-top-right d-flex flex-column">
                    <h2 class="news-top-heading">${newsTitle}</h2>
                    <h3 class="news-top-date">${date}</h3>
                    <p class="news-top-description">${newsDescription}</p>
                    <a href="#" class="news-top-btn">Ətraflı</a>
                </div>
                    `;

            })
        })
}