const nav = document.querySelector('header');
const navTop = nav.offsetTop;
window.addEventListener('scroll', () => {
    (window.scrollY >= navTop) ? nav.classList.add('sticky-header') : nav.classList.remove('sticky-header');
})



