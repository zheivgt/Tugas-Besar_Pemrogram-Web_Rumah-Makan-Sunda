// icons start
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
        loginForm.classList.toggle('active');
    }
    // icons end


// Navbar
var navbar = document.getElementById('navbar');
var menu = document.getElementById('menu');

window.onscroll = function() {
    if (window.pageYOffset >= menu.offsetTop) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}