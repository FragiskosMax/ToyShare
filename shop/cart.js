let cart = [];

// Function to load cart data from localStorage
function loadCart() {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = savedCart;
    displayCartItems();
}

// Function to display cart items
function displayCartItems() {
    const cartItemsDiv = document.querySelector('#cart-items');
    const totalPriceDiv = document.querySelector('#total-price');
    cartItemsDiv.innerHTML = '';  // Clear current items
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <p>${item.name} - €${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsDiv.appendChild(itemDiv);
        totalPrice += parseFloat(item.price);
    });

    totalPriceDiv.textContent = totalPrice.toFixed(2);
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));  // Save updated cart
    loadCart();  // Reload cart
}

window.onload = loadCart;
