const email = document.querySelector('.email');
const menuDesktop = document.querySelector('.main-container-desktop-menu');
const menuMobile = document.querySelector('.container-mobile-menu');
const menuIcon = document.querySelector('.icon-menu');
const shoppingCartIcon = document.querySelector('.shopping-cart');
const shoppingCartPage = document.querySelector('.main-container-shopping-cart');
const flechitaCart = document.getElementById('flechita');


email.addEventListener('click', littleMenu);
menuIcon.addEventListener('click', mobileMenu);
shoppingCartIcon.addEventListener('click', CartPage);
flechitaCart.addEventListener('click', CartPage);

function littleMenu (event) {
    event.preventDefault();
    shoppingCartPage.classList.add('inactive');
    menuMobile.classList.add('inactive');      
    menuDesktop.classList.toggle('inactive');    
}

function mobileMenu () {
    menuDesktop.classList.add('inactive');
    shoppingCartPage.classList.add('inactive');
    menuMobile.classList.toggle('inactive');    
}

function CartPage (event) {
    event.preventDefault();
    menuDesktop.classList.add('inactive');
    menuMobile.classList.add('inactive');       
    shoppingCartPage.classList.toggle('inactive'); 
}