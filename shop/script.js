let cart = [];

// Function to update the cart counter
function updateCartCounter() {
    const cartCounter = document.querySelector('#cart-count');
    cartCounter.textContent = cart.length;
    localStorage.setItem('cart', JSON.stringify(cart)); // Save to localStorage
}

// Function to add item to cart
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCartCounter();
    alert(`${productName} has been added to the cart!`);
}

// Load cart from localStorage
function loadCart() {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = savedCart;
    updateCartCounter();
}

function searchProducts() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const features = document.querySelectorAll('.feature');

    features.forEach(feature => {
        const productName = feature.getAttribute('data-name').toLowerCase();
        if (productName.includes(searchInput)) {
            feature.style.display = '';  // Show product
        } else {
            feature.style.display = 'none';  // Hide product
        }
    });
}

// Event listener setup for buttons
window.onload = () => {
    loadCart();  // Load cart when page loads
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const productName = e.target.dataset.name;
            const productPrice = e.target.dataset.price;
            addToCart(productName, productPrice);
        });
    });
};
