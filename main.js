const email = document.querySelector('.email');
const menuDesktop = document.querySelector('.main-container-desktop-menu');
const menuMobile = document.querySelector('.container-mobile-menu');
const menuIcon = document.querySelector('.icon-menu');
const shoppingCartIcon = document.querySelector('.shopping-cart');
const shoppingCartPage = document.querySelector('.main-container-shopping-cart');
const flechitaCart = document.getElementById('flechita');
const productsContainer = document.querySelector('.products');


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

const productList = [
    {name: 'Headphones', price: '89,99', img: 'https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Mac 8gb RAM', price: '189,99', img: 'https://images.pexels.com/photos/376704/pexels-photo-376704.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Camera 4K HD', price: '45,76', img: 'https://images.pexels.com/photos/821653/pexels-photo-821653.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Headphones', price: '89,99', img: 'https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Plant', price: '9,99', img: 'https://images.pexels.com/photos/993626/pexels-photo-993626.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Mac 8gb RAM', price: '189,99', img: 'https://images.pexels.com/photos/376704/pexels-photo-376704.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Plant', price: '9,99', img: 'https://images.pexels.com/photos/993626/pexels-photo-993626.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Motorbike 97', price: '759,99', img: 'https://images.pexels.com/photos/2393835/pexels-photo-2393835.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Headphones', price: '89,99', img: 'https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Camera 4K HD', price: '45,76', img: 'https://images.pexels.com/photos/821653/pexels-photo-821653.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Mac 8gb RAM', price: '189,99', img: 'https://images.pexels.com/photos/376704/pexels-photo-376704.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Plant', price: '9,99', img: 'https://images.pexels.com/photos/993626/pexels-photo-993626.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Camera 4K HD', price: '45,76', img: 'https://images.pexels.com/photos/821653/pexels-photo-821653.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Motorbike 97', price: '759,99', img: 'https://images.pexels.com/photos/2393835/pexels-photo-2393835.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Headphones', price: '89,99', img: 'https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Mac 8gb RAM', price: '189,99', img: 'https://images.pexels.com/photos/376704/pexels-photo-376704.jpeg?auto=compress&cs=tinysrgb&w=600'},
];

mostrarArticulos(productList);

function mostrarArticulos (array){
    for (product of array){
        const productCard = document.createElement('div');
        productCard.setAttribute('class', 'product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
        productImg.setAttribute('class', 'product-image');
    
        const productDescription = document.createElement('section');
        productDescription.setAttribute('class', 'product-description');
    
        const productInfo = document.createElement('div');
        productInfo.setAttribute('class', 'product-info');
    
        const productPrice = document.createElement('p');
        productPrice.setAttribute('class', 'price');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.setAttribute('class', 'product-name');
        productName.innerText = product.name;
    
        const button = document.createElement('button');
        button.setAttribute('class', 'add-to-cart');
    
        const imgButton = document.createElement('img');
        imgButton.setAttribute('src', '/curso-frontend-developer-practico-main/icons/bt_add_to_cart.svg');
    
    
        productCard.append(productImg, productDescription);
        productDescription.append(productInfo, button);
        productInfo.append(productPrice, productName);
        button.appendChild(imgButton);
        productsContainer.appendChild(productCard);
    }
}