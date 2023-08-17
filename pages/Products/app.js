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

document.addEventListener("DOMContentLoaded", getAllWines)

// fetching data
const productsContainer = document.querySelector('.products-container')

function getAllWines() {
    fetch("https://azabrau-backend.vercel.app/wines").then((res) => res.json())
        .then(data => {
            productsContainer.innerHTML = "";

            data.forEach((card) => {
                const { title, description, image, spirt } = card;
                productsContainer.innerHTML += `
            <div class="products-card d-flex flex-column align-center">
            <a class="products-card-link" href=""></a>
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


// filter

// filter heading change
const filterHeading = document.querySelectorAll('.filter-item-inner-heading');
const filterContent = document.querySelectorAll('.filter-items-inner');

filterHeading.forEach((heading, index) => {
    heading.addEventListener('click', function () {
        heading.classList.toggle('plus');
        filterContent[index].classList.toggle('hiddenFilter');
    });
});

// ---------------------

// actual filter checkbox 

const allFilterInputs = document.querySelectorAll(".all-filter-input")

allFilterInputs.forEach((input) => {
    input.addEventListener("change", function (e) {
        const { value, name } = e.target;
        console.log(e.target);

        if (this.checked) {
            allFilterInputs.forEach((elem) => {
                if (elem !== this) {
                    elem.checked = false;
                }
            });

            fetch(`https://azabrau-backend.vercel.app/wines?${name}=${value}`).then((res) => res.json()).then(data => {
                productsContainer.innerHTML = ""

                data.forEach((card) => {
                    const { title, description, image, spirt } = card;
                    productsContainer.innerHTML += `
                <div class="products-card d-flex flex-column align-center">
                <a class="products-card-link" href=""></a>
                    <img src="${image}" alt="">
                    <h3 class="products-card-title">${title}</h3>
                    <p class="products-card-description">Çeşid: ${description}</p>
                    <p class="spirt">Spirt: ${spirt}</p>

                    <a class="products-card-btn" href="">Ətraflı</a>
                </div>
                `
                })
            }).catch((error) => console.log(error))
        } else {
            getAllWines()
        }
    })
});
