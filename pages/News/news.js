// fetching data

const url = "https://azabrau-backend.vercel.app/news";
const newsTop = document.querySelector(".news-top");
const newsBottom = document.querySelector(".news-bottom");

document.addEventListener("DOMContentLoaded", getData);

// function for fetching data
function getData() {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      // console.log(data);

      getTopNews(data[0]);

      const slicedData = data.slice(1, data.length);
      getAllNews(slicedData);
    })
    .catch((err) => {
      console.log(err);
    });
}

// functions for writing data

function getTopNews(topData) {
  // newsTop.innerHTML = "";
  // const topData = data.slice(0, 1)
  const { id, newsTitle, newsDescription, image, date } = topData;

  newsTop.innerHTML += `
                <div class="news-top-left">
                    <img src="${image}" alt="wine bottle">
                </div>
                <div class="news-top-right d-flex flex-column">
                    <h2 class="news-top-heading">${newsTitle}</h2>
                    <h3 class="news-top-date">${date}</h3>
                    <p class="news-top-description">${newsDescription}</p>
                    <a href="../SingleNews/singleNews.html?id=${id}" class="news-top-btn">Ətraflı</a>
                </div>
                    `;
}

function getAllNews(allNews) {
  console.log(allNews);

  newsBottom.innerHTML = "";
  // const slicedData = data.slice(1, data.length)
  // console.log(slicedData)
  allNews.forEach((news) => {
    const { id, newsTitle, image, date } = news;

    newsBottom.innerHTML += `
                <div class="news-bottom-container">
                    <a href="../SingleNews/singleNews.html?id=${id}" class="newsLink-bottom"></a>
                    <img src="${image}" alt="wine bottles">
                    <h2 class="news-bottom-heading">${newsTitle}</h2>
                    <h3 class="news-bottom-date">${date}</h3>
                </div>
                `;
  });
}
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
