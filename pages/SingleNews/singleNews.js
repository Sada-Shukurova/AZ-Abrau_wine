
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