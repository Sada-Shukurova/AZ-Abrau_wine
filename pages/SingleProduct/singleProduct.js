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
const url = 'https://azabrau-backend.vercel.app/wines'


// fetching data for single wine product left and right and middle section
const topLeftBgImgContainer = document.querySelector('.top-left-bg-img-container');
const topRightContentContainer = document.querySelector('.top-right-content-container');
const cardIngredients = document.getElementById('ingredients');
const cardDishes = document.getElementById('dishes');
const cardTemperature = document.getElementById('temperature');
const cardStorage = document.getElementById('storage');


let productID = new URL(window.location.href).searchParams.get('id');
const newURL = `https://azabrau-backend.vercel.app/wines/${productID}`;

document.addEventListener("DOMContentLoaded", getData);
function getData() {
    fetch(newURL).then((res) => res.json())
        .then((data) => {

            // console.log(data)
            topLeftBgImgContainer.innerHTML = "";
            topRightContentContainer.innerHTML = "";
            otherProductsContainer.innerHTML = '';
            cardIngredients.textContent = "";
            cardDishes.textContent = "";
            cardTemperature.textContent = "";
            cardStorage.textContent = "";


            // data.forEach((wines) => {
            const {
                title,
                description,
                spirt,
                image,
                country,
                year,
                longDescription,
                ingredients,
                dishes,
                temperature,
                storage } = data;

            topLeftBgImgContainer.innerHTML = `
                <img class="round-bg" src="../../assets/images/singleProduct/bottle-bg.png" alt="backgroung">
                <img class="bottle-img" src="${image}" alt="bottle">
                `;
            topRightContentContainer.innerHTML = `
                <h2 class="wine-name">${title}</h2>
                <p class="wine-description-top">${description}</p>
                <h3 class="wine-country-title">Mənşəyi</h3>
                <p class="wine-country">${country}</p>
                <h3 class="wine-alcohol-title">Alkoqol dərəcəsi</h3>
                <p class="wine-alcohol">${spirt}</p>
                <h3 class="wine-year-title">İstehsal ili</h3>
                <p class="wine-year">${year}</p>
                <h3 class="wine-description-title">Məhsul haqqında</h3>
                <p class="wine-description">${longDescription}</p>
                </div>
                `;
            cardIngredients.textContent = `${ingredients}`;
            cardDishes.textContent = `${dishes}`;
            cardTemperature.textContent = `${temperature}`;
            cardStorage.textContent = `${storage}`;
            // })

        }).catch((error) => console.log(error))
}



// fetching shuffeled data for bottom section
const otherProductsContainer = document.querySelector('.bottom-section-products-container');



function getOtherWines() {
    fetch(url).then((res => res.json()))
        .then(data => {
            otherProductsContainer.innerHTML = '';

            // const shuffledData = data.sort(() => 0.5 - Math.random()).slice(0, 4);
            const shuffledData = _.shuffle(data).slice(0, 4);
            shuffledData.forEach((wine) => {
                const { id, title, image, description, spirt } = wine;
                otherProductsContainer.innerHTML += `
<div class="products-card d-flex flex-column align-center">
            <a class="products-card-link" href="./singleProduct.html?id=${id}"></a>
                <img src="${image}" alt="">
                <h3 class="products-card-title">${title}</h3>
                <p class="products-card-description">Çeşid: ${description}</p>
                <p class="spirt">Spirt: ${spirt}</p>
    
                <a class="products-card-btn" href="">Ətraflı</a>
            </div>
`
            })
        }).catch((error) => console.log(error))
}
document.addEventListener("DOMContentLoaded", getOtherWines);