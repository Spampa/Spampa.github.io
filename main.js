const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.full-menu');
const body = document.querySelector('body');


let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menu.classList.add('open');
        body.classList.add('notScroll');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menu.classList.remove('open');
        body.classList.remove('notScroll');
        menuOpen = false;
    }
} );

menu.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    menu.classList.remove('open');
    body.classList.remove('notScroll');
    menuOpen = false;
} );


