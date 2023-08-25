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
document.addEventListener("DOMContentLoaded", getTopNews);
document.addEventListener("DOMContentLoaded", getAllNews);


const url = "https://azabrau-backend.vercel.app/news";
const newsTop = document.querySelector(".news-top");
const newsBottom = document.querySelector(".news-bottom");

function getTopNews() {
    fetch(url)
        .then(res => res.json()
            .then(data => {
                newsTop.innerHTML = "";
                const topData = data.slice(0, 1)
                topData.forEach(item => {
                    const { newsTitle,
                        newsDescription,
                        image,
                        date
                    } = item;


                    newsTop.innerHTML += `
                <div class="news-top-left">
                    <img src="${image}" alt="wine bottle">
                </div>
                <div class="news-top-right d-flex flex-column">
                    <h2 class="news-top-heading">${newsTitle}</h2>
                    <h3 class="news-top-date">${date}</h3>
                    <p class="news-top-description">${newsDescription}</p>
                    <a href="../singleNews/singleNews.html?id=${id}" class="news-top-btn">Ətraflı</a>
                </div>
                    `;
                })
            })).catch((error) => console.log(error))
};

function getAllNews() {
    fetch(url)
        .then(resp => resp.json())
        .then(data => {

            newsBottom.innerHTML = "";
            const slicedData = data.slice(1, 7)
            slicedData.forEach((news) => {
                const { newsTitle,
                    image,
                    date
                } = news;

                newsBottom.innerHTML += `
                <div class="news-bottom-container">
                    <a href="#newsB" class="newsLink-bottom"></a>
                    <img src="${image}" alt="wine bottles">
                    <h2 class="news-bottom-heading">${newsTitle}</h2>
                    <h3 class="news-bottom-date">${date}</h3>
                </div>
                `
            })
        }).catch((error) => console.log(error))
}