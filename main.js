const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.full-menu');
const container = document.querySelector('.container');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menu.classList.add('open');
        container.classList.add('hide');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menu.classList.remove('open');
        container.classList.remove('hide');
        menuOpen = false;
    }
} );