const productsContainer = document.querySelector('.products-container')

fetch("https://azabrau-backend.vercel.app/wines").then((res) => res.json())
    .then(data => {
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


// filter
const filterHeading = document.querySelectorAll('.filter-item-inner-heading');
const filterContent = document.querySelectorAll('.filter-items-inner');

filterHeading.forEach((heading, index) => {
    heading.addEventListener('click', function () {
        heading.classList.toggle('plus');
        filterContent[index].classList.toggle('hiddenFilter');
    });
});




