const email = document.querySelector('.email');
const menuDesktop = document.querySelector('.main-container-desktop-menu');
const menuMobile = document.querySelector('.container-mobile-menu');
const menuIcon = document.querySelector('.icon-menu');
const shoppingCartIcon = document.querySelector('.shopping-cart');
const shoppingCartPage = document.querySelector('#shopping-cart');
const flechitaCart = document.getElementById('flechita');
const productsContainer = document.querySelector('.products');
const productDescription = document.querySelector('#product-description');
const buttonClose = document.querySelector('.close');


email.addEventListener('click', littleMenu);
menuIcon.addEventListener('click', mobileMenu);
shoppingCartIcon.addEventListener('click', CartPage);
flechitaCart.addEventListener('click', CartPage);
buttonClose.addEventListener('click', stopShowingDescription);

function littleMenu (event) {
    event.preventDefault();
    shoppingCartPage.classList.add('inactive');
    productDescription.classList.add('inactive');  
    menuMobile.classList.add('inactive');      
    menuDesktop.classList.toggle('inactive');    
}

function mobileMenu () {
    menuDesktop.classList.add('inactive');
    shoppingCartPage.classList.add('inactive');
    productDescription.classList.add('inactive');  
    menuMobile.classList.toggle('inactive');    
}

function CartPage (event) {
    event.preventDefault();
    menuDesktop.classList.add('inactive');
    menuMobile.classList.add('inactive');  
    productDescription.classList.add('inactive');     
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

const descriptionList = [
    {title: 'Headphones', description: 'The best way to feel the music and share it with friends.'},
    {title: 'Mac 8gb RAM', description: 'The best quality for work and entertaining.'},
    {title: 'Plant', description: 'A beatiful way to decore and bring life to your house.'},
    {title: 'Motorbike 97', description: 'It gets you wherever you wanna go... in a vintage way.'},
    {title: 'Camera 4K HD', description: 'This is the best camera ever created, everyone should have one of these in their homes. It´s ideal for vacations, trips, holidays. The best way to save your memories forever.'}
]

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

        productImg.addEventListener('click', () => prepareDescription(productName.innerText, productPrice.innerText, productImg.getAttribute('src')));
    }
}

function stopShowingDescription() {
    productDescription.classList.add('inactive');
}

function description (name) {
    
    let i = 0;
    while (descriptionList[i].title != name){
        i++;
    }

    return descriptionList[i].description;
}

function prepareDescription (name, price, img) {

    let productName = document.querySelector('#name');
    productName.innerText = name;

    let productPrice = document.querySelector('#price');
    productPrice.innerText = price;

    let productImg = document.querySelector('#img');
    productImg.setAttribute('src', img);

    let productDescription = document.querySelector('#description');
    productDescription.innerText = description(name);

    showDescription();
}

function showDescription () {
    shoppingCartPage.classList.add('inactive');
    productDescription.classList.remove('inactive');
}