const email = document.querySelector('.email');
const menuDesktop = document.querySelector('.main-container-desktop-menu');
const menuMobile = document.querySelector('.container-mobile-menu');
const menuIcon = document.querySelector('.icon-menu');
const shoppingCartIcon = document.querySelector('.shopping-cart');
const shoppingCartPage = document.querySelector('#shopping-cart');
const flechitaCart = document.getElementById('flechita');
const productsContainer = document.querySelector('.products');
const mainPage = document.querySelector('.main.page');
const productDescription = document.querySelector('#product-description');
const buttonClose = document.querySelector('.close');
const all = document.querySelector('.all');
const electronics = document.querySelector('.electronics');
const furniture = document.querySelector('.furniture');
const toys = document.querySelector('.toys');
const others = document.querySelector('.others');


email.addEventListener('click', littleMenu);
menuIcon.addEventListener('click', mobileMenu);
shoppingCartIcon.addEventListener('click', CartPage);
flechitaCart.addEventListener('click', CartPage);
buttonClose.addEventListener('click', stopShowingDescription);
all.addEventListener('click', () => mostrarArticulos(productList, 'all'));
electronics.addEventListener('click', () => filtrarArticulos(productList, 'electronics'));
furniture.addEventListener('click', () => filtrarArticulos(productList, 'furniture'));
toys.addEventListener('click', () => filtrarArticulos(productList, 'toys'));
others.addEventListener('click', () => filtrarArticulos(productList, 'others'));

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
    {name: 'Headphones', price: '89,99', category: 'electronics', img: 'https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Bookshelves', price: '58,99', category: 'furniture', img: 'https://images.pexels.com/photos/2898170/pexels-photo-2898170.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Modern Sofa', price: '119,99', category: 'furniture', img: 'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Plant', price: '9,99', category: 'furniture', img: 'https://images.pexels.com/photos/993626/pexels-photo-993626.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Sweater', price: '12,99', category: 'others', img: 'https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Simple Shoes', price: '19,99', category: 'others', img: 'https://images.pexels.com/photos/934069/pexels-photo-934069.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Wardrobe', price: '39,99', category: 'furniture', img: 'https://images.pexels.com/photos/3489129/pexels-photo-3489129.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Toy Car Mini', price: '46,00', category: 'toys', img: 'https://images.pexels.com/photos/381228/pexels-photo-381228.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Camera 4K HD', price: '45,76', category: 'electronics', img: 'https://images.pexels.com/photos/821653/pexels-photo-821653.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Pillows', price: '19,99', category: 'furniture', img: 'https://images.pexels.com/photos/1248583/pexels-photo-1248583.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Funko Pop', price: '39,99', category: 'toys', img: 'https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Vintage Sofa', price: '75,46', category: 'furniture',img: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Motorbike 97', price: '759,99', category: 'others', img: 'https://images.pexels.com/photos/2393835/pexels-photo-2393835.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Laptop Axus', price: '189,99', category: 'electronics', img: 'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Professional Digital Camera', price: '129,99', category: 'electronics', img: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=600'},
    {name: 'Headphones B', price: '93,99', category: 'electronics', img: 'https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=600s'},
    {name: 'Mac 8gb RAM', price: '189,99', category: 'electronics', img: 'https://images.pexels.com/photos/376704/pexels-photo-376704.jpeg?auto=compress&cs=tinysrgb&w=600'},
];

const descriptionList = [
    {title: 'Headphones', description: 'The best way to feel the music and share it with friends.'},
    {title: 'Mac 8gb RAM', description: 'The best quality for work and entertaining.'},
    {title: 'Plant', description: 'A beatiful way to decore and bring life to your house.'},
    {title: 'Motorbike 97', description: 'It gets you wherever you wanna go... in a vintage way.'},
    {title: 'Camera 4K HD', description: 'This is the best camera ever created, everyone should have one of these in their homes. It´s ideal for vacations, trips, holidays. The best way to save your memories forever.'},
    {title: 'default', description: 'Just enjoy it!'}
]

mostrarArticulos(productList);

function mostrarArticulos (array){

    productsContainer.innerHTML = '';
    
    for (product of array){
            createProductCard(product);
    }
}

function createProductCard(product) {
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

function filtrarArticulos(array, category) { 

    productsContainer.innerHTML = '';

    let filteredArray = array.filter(function(product){
        return product.category == category;
    });
    for (product of filteredArray){
        createProductCard(product);
    }    
    
}

function stopShowingDescription() {
    productDescription.classList.add('inactive');
}

function description (name) {
    
    let i = 0;
    while (descriptionList[i].title != name && i < descriptionList.length - 1){
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