
// Product objects
const products = [
    { id: 1, name: "Headphones", price: 1500, icon: "🎧" },
    { id: 2, name: "Computer Mouse", price: 500, icon: "🖱️" },
    { id: 3, name: "Keyboard", price: 1200, icon: "⌨️" },
    { id: 4, name: "Smart Watch", price: 2500, icon: "⌚" },
    { id: 5, name: "Speaker", price: 1800, icon: "🔊" },
    { id: 6, name: "Camera", price: 5000, icon: "📷" }
];

// Cart array
let cart = [];

// READ: Display all products using map()
function displayProducts() {
    const productsContainer = document.getElementById("products");

    productsContainer.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-icon">${product.icon}</div>
            <h3>${product.name}</h3>
            <p class="price">₹${product.price.toLocaleString("en-IN")}</p>
            <button class="add-btn" data-id="${product.id}">
                Add to Cart
            </button>
        </div>
    `).join("");
}

// CREATE: Add a product to the cart
function addToCart(id) {
    const product = products.find(item => item.id === id);

    if (!product) return;

    const cartItem = cart.find(item => item.id === id);

    if (cartItem) {
        cart = cart.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    displayCart();
    showMessage(`${product.name} added to cart!`);
}

// READ: Display cart items
function displayCart() {
    const cartContainer = document.getElementById("cart-items");

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                <p>Your cart is empty. Add some products!</p>
            </div>
        `;
    } else {
        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div>
                    <h3>${item.icon} ${item.name}</h3>
                    <p>₹${item.price.toLocaleString("en-IN")} each</p>
                    <p>Subtotal: ₹${(
                        item.price * item.quantity
                    ).toLocaleString("en-IN")}</p>
                </div>

                <div class="quantity-controls">
                    <button data-action="decrease" data-id="${item.id}">
                        −
                    </button>

                    <span>${item.quantity}</span>

                    <button data-action="increase" data-id="${item.id}">
                        +
                    </button>

                    <button class="remove-btn"
                        data-action="remove" data-id="${item.id}">
                        Remove
                    </button>
                </div>
            </div>
        `).join("");
    }

    // REDUCE: Calculate total price
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    document.getElementById("total").textContent =
        total.toLocaleString("en-IN");
}

// UPDATE: Change product quantity
function updateQuantity(id, change) {
    const item = cart.find(product => product.id === id);

    if (!item) return;

    const newQuantity = item.quantity + change;

    if (newQuantity <= 0) {
        removeFromCart(id);
        return;
    }

    cart = cart.map(product =>
        product.id === id
            ? { ...product, quantity: newQuantity }
            : product
    );

    displayCart();
}

// DELETE: Remove one product
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);

    displayCart();
    showMessage("Product removed from cart.");
}

// DELETE: Remove all products
function clearCart() {
    cart = [];
    displayCart();
    showMessage("Cart cleared.");
}

// Display a message
function showMessage(message) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;

    setTimeout(() => {
        messageElement.textContent = "";
    }, 2000);
}

// Handle Add to Cart button clicks
document.getElementById("products").addEventListener("click", event => {
    const button = event.target.closest("[data-id]");

    if (button) {
        addToCart(Number(button.dataset.id));
    }
});

// Handle quantity and remove button clicks
document.getElementById("cart-items").addEventListener("click", event => {
    const button = event.target.closest("button[data-action]");

    if (!button) return;

    const id = Number(button.dataset.id);
    const action = button.dataset.action;

    if (action === "increase") {
        updateQuantity(id, 1);
    } else if (action === "decrease") {
        updateQuantity(id, -1);
    } else if (action === "remove") {
        removeFromCart(id);
    }
});

// Clear Cart button
document.getElementById("clear-cart").addEventListener("click", clearCart);

// Checkout button
document.getElementById("checkout-btn").addEventListener("click", () => {
    if (cart.length === 0) {
        showMessage("Your cart is empty!");
        return;
    }

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    alert(`Order placed successfully!\nTotal: ₹${total.toLocaleString("en-IN")}`);

    cart = [];
    displayCart();
});

// Initial display
displayProducts();
displayCart();
