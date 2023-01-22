const email = document.querySelector('.email');
const menuDesktop = document.querySelector('.main-container-desktop-menu');
const menuMobile = document.querySelector('.container-mobile-menu');
const menuIcon = document.querySelector('.icon-menu');



email.addEventListener('click', littleMenu);
menuIcon.addEventListener('click', mobileMenu);

function littleMenu (event) {
    event.preventDefault();
    menuDesktop.classList.toggle('inactive');    
}

function mobileMenu () {
    menuMobile.classList.toggle('inactive');    
}