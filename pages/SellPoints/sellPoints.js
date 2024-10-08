// swiper

window.onload = () => {
  console.log("page is fully loaded");
  let swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 3,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },

      870: {
        slidesPerView: 3,
      },
    },
    mousewheel: {
      invert: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  });
};

// ------------------

document.addEventListener("DOMContentLoaded", getSellPoints);

const swiperWrapper = document.querySelector(".swiper-wrapper");
const pointMap = document.getElementById("pointMap");

// fetching addresses data

function getSellPoints() {
  fetch("./sellPointDb.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.forEach((address) => {
        const { sellTitle, sellAddress, mobile, tel, src } = address;

        swiperWrapper.innerHTML += `
                <div class="swiper-slide">
                <h3 class="sell-slide-heading"> ${sellTitle}</h3>
                                <p class="sell-slide-address">${sellAddress}</p>
                                <a class="mobile-number" href="tel:${mobile}">${mobile}</a>
                                <a class="home-number" href="tel:${tel}">${tel}</a>
                                <span class="swiper-btn" data-src="${src}">Xəritədə bax</span>
                                </div>
                                `;
        // <span onclick="changeMapLocation(this)" class="swiper-btn" data-src="${src}">Xəritədə bax</span>
      });
    })
    .catch((error) => console.log(error))
    .finally(() => {
      changeMapLocation();
    });
}

// const changeMapLocation = (span) => {
//     pointMap.src = span.dataset.src
// }

// changing map location and showing it

function changeMapLocation() {
  const btns = document.querySelectorAll(".swiper-btn");

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      console.log(e.target);
      pointMap.src = e.target.dataset.src;
    });
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
