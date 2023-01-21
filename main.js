const email = document.querySelector('.email');
const menu = document.querySelector('.main-container');


email.addEventListener('click', littleMenu);


function littleMenu (event) {
    event.preventDefault();
    menu.classList.toggle('inactive');    
}