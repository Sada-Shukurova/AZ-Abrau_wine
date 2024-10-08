// scroll to top
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scrollToTop");

  scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// fetching data

document.addEventListener("DOMContentLoaded", getAllWines);

const productsContainer = document.querySelector(".products-container");

function getAllWines() {
  fetch("https://azabrau-backend.vercel.app/wines")
    .then((res) => res.json())
    .then((data) => {
      productsContainer.innerHTML = "";

      data.forEach((card) => {
        const { title, description, image, spirt, id } = card;
        productsContainer.innerHTML += `
            <div class="products-card d-flex flex-column align-center">
            <a class="products-card-link" href="../SingleProduct/singleProduct.html?id=${id}"></a>
                <img src="${image}" alt="">
                <h3 class="products-card-title">${title}</h3>
                <p class="products-card-description">Çeşid: ${description}</p>
                <p class="spirt">Spirt: ${spirt}</p>
    
                <a class="products-card-btn" href="">Ətraflı</a>
            </div>
            `;
      });
    })
    .catch((error) => console.log(error));
}

// filter

// filter heading change
const filterHeading = document.querySelectorAll(".filter-item-inner-heading");
const filterContent = document.querySelectorAll(".filter-items-inner");

filterHeading.forEach((heading, index) => {
  heading.addEventListener("click", function () {
    heading.classList.toggle("plus");
    filterContent[index].classList.toggle("hiddenFilter");
  });
});

// ---------------------

// actual filter checkbox

const allFilterInputs = document.querySelectorAll(".all-filter-input");

allFilterInputs.forEach((input) => {
  input.addEventListener("change", function (e) {
    const { value, name } = e.target;
    // console.log(e.target);

    if (this.checked) {
      allFilterInputs.forEach((elem) => {
        if (elem !== this) {
          elem.checked = false;
        }
      });

      fetch(`https://azabrau-backend.vercel.app/wines?${name}=${value}`)
        .then((res) => res.json())
        .then((data) => {
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

                    <a class="products-card-btn" href="./asdasd">Ətraflı</a>
                </div>
                `;
          });
        })
        .catch((error) => console.log(error));
    } else {
      getAllWines();
    }
  });
});
