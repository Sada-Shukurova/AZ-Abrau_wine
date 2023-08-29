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

document.addEventListener("DOMContentLoaded", getSingleNews);

const singleCardContainer = document.querySelector(".single-card-container");
const currentNews = document.querySelector('.currentNews')

function getSingleNews() {
    const newsID = new URL(window.location.href).searchParams.get('id');
    const newsURL = `https://azabrau-backend.vercel.app/news/${newsID}`;


    fetch(newsURL)
        .then((res) => res.json())
        .then((data) => {
            singleCardContainer.innerHTML = "";
            console.log(data);
            const {
                newsTitle,
                newsDescription,
                image,
                date
            } = data;

            singleCardContainer.innerHTML = `
                <h2 class="single-card-heading">${newsTitle}</h2>
                <img src="${image}" alt="wine bottle">
                <p class="single-card-date">${date}</p>
                <h3 class="single-card-description">${newsDescription}</h3>
            `;
            currentNews.textContent = `${newsTitle}`
        })
        .catch((error) => console.log(error));
}