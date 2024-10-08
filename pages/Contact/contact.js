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
// form

const form = document.querySelector(".userForm");
const username = document.querySelector("#username");
const userSurname = document.querySelector("#userSurname");
const userMail = document.querySelector("#userMail");
const userTel = document.querySelector("#userTel");
const userComment = document.querySelector("#userComment");
// form button
const formSubmit = document.querySelector(".formSubmit");
// modal
// const modal = document.getElementById('modal');
// const closeModal = document.querySelector('.close-modal');
// closeModal.addEventListener('click', () => {
//     modal.classList.remove('modalOpen');
// }
// )

let usernameValue,
  userSurnameValue,
  userMailValue,
  userTelValue,
  userFullNameValue,
  userMessageValue;

username.onkeyup = (e) => {
  usernameValue = e.target.value;
};
userSurname.onkeyup = (e) => {
  userSurnameValue = e.target.value;
};
userMail.onkeyup = (e) => {
  userMailValue = e.target.value;
};
userComment.onkeyup = (e) => {
  userMessageValue = e.target.value;
};
userTel.onkeyup = (e) => {
  userTelValue = e.target.value;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    name: usernameValue + " " + userSurnameValue,
    email: userMailValue,
    number: userTelValue,
    message: userMessageValue,
  };

  fetch("http://localhost:3000/requests", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Request submitted successfully");
        // open modal
        // modal.classList.add('modalOpen');

        Swal.fire({
          title: "Rəy bildirdiyiniz üçün təşəkkür edirik!🍷",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
          confirmButtonText: "BAĞLA",
        });
        // Clear the input fields
        usernameValue = "";
        userSurnameValue = "";
        userMailValue = "";
        userMessageValue = "";
        userTelValue = "";

        // Reset the form
        form.reset();
      } else {
        console.error("Error submitting request.");
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
