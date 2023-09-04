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

// form

const form = document.querySelector('.userForm');
const username = document.querySelector('#username');
const userSurname = document.querySelector('#userSurname');
const userMail = document.querySelector('#userMail');
const userTel = document.querySelector('#userTel');
const userComment = document.querySelector('#userComment');

let usernameValue, userSurnameValue, userMailValue, userTelValue, userFullNameValue, userMessageValue;

username.onkeyup = (e) => {
    usernameValue = e.target.value;
}
userSurname.onkeyup = (e) => {
    userSurnameValue = e.target.value;
}
userMail.onkeyup = (e) => {
    userMailValue = e.target.value;
}
userComment.onkeyup = (e) => {
    userMessageValue = e.target.value;
}
userTel.onkeyup = (e) => {
    userTelValue = e.target.value;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
        name: usernameValue + ' ' + userSurnameValue,
        email: userMailValue,
        number: userTelValue,
        message: userMessageValue
    };

    fetch('http://localhost:3000/requests', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                // Show a success toast
                console.log('Request submitted successfully');
                // Clear the input fields
                usernameValue = '';
                userSurnameValue = '';
                userMailValue = '';
                userMessageValue = '';
                userTelValue = '';
                // Reset the form
                form.reset();
            } else {
                console.error('Error submitting request.');
            }
        })
        .catch(error => {
            console.log(error);
        });
})

