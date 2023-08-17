let cartItems = [];

function updateCartIcon() {
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  document.querySelector('.totalQuantity').textContent = totalQuantity;
}

function addToCart(productName, price, imageSrc) {
  const existingItem = cartItems.find(item => item.productName === productName);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartItems.push({ productName, price, imageSrc, quantity: 1 });
  }
  updateCartIcon();
}

function clearCart() {
  cartItems = [];
  updateCartIcon();
}

function renderCart() {
  // Render the cart items in your cart page using cartItems array
}

// Attach event listeners to add to cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(button => {
  button.addEventListener('click', function() {
    const productName = this.getAttribute('data-product-name');
    const price = parseFloat(this.getAttribute('data-price'));
    const imageSrc = this.getAttribute('data-image-src');
    addToCart(productName, price, imageSrc);
  });
});

// Attach event listener to clear cart button
  const clearCartButton = document.getElementById('clear-cart');
    clearCartButton.addEventListener('click', clearCart);

    // Function to render cart items
    function renderCart() {
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = ''; // Clear previous content

        let totalAmount = 0;

        cartItems.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('col-12', 'mb-3');
            cartItemDiv.innerHTML = `
                <div class="card">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${item.imageSrc}" class="img-fluid" alt="Product Image">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${item.productName}</h5>
                                <p class="card-text">Price: ₱${item.price}</p>
                                <p class="card-text">Quantity: ${item.quantity}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(cartItemDiv);

            totalAmount += item.price * item.quantity;
        });

        const totalAmountElement = document.getElementById('total-amount');
        totalAmountElement.textContent = `₱${totalAmount}`;
    }

    // Call renderCart() initially to display cart items on page load
    renderCart();


    
   