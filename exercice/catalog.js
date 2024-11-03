async function loadGoods(sortOrder = 'asc') {
    try {
        const response = await fetch('http://localhost:5000/goods');
        let goods = await response.json();

        goods.sort((a, b) => {
            return sortOrder === 'asc' ? a.product_price - b.product_price : b.product_price - a.product_price;
        });

        const catalog = document.getElementById('catalog');
        catalog.innerHTML = '';

        goods.forEach(item => {
            const productHTML = `
                <div class="product" onclick="addToCart('${item.id}', '${item.product_name}', '${item.product_price}', '${item.url}')">
                    <img src="${item.url}" alt="${item.product_name}">
                    <h3>${item.product_name}</h3>
                    <p>${item.product_description}</p>
                    <span class="price">${item.product_price} руб</span>
                </div>
            `;
            catalog.innerHTML += productHTML;
        });
    } catch (error) {
        console.error('Ошибка загрузки товаров:', error);
    }
}

function addToCart(productId, productName, productPrice, productImage) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = { id: productId, name: productName, price: productPrice, image: productImage };
    
    if (!cart.some(item => item.id === productId)) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Товар добавлен в корзину');
        updateCartItems();
    } else {
        alert('Товар уже в корзине');
    }
}

function updateCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;

    cart.forEach(item => {
        const cartItemHTML = `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h4>${item.name}</h4>
                    <p>${item.price} руб.</p>
                    <a href="#" onclick="removeFromCart('${item.id}')">Удалить</a>
                </div>
            </div>
        `;
        cartItemsContainer.innerHTML += cartItemHTML;
        totalPrice += parseFloat(item.price);
    });

    document.getElementById('total').innerText = `Итого: ${totalPrice} руб.`;
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartItems();
}

function toggleCart() {
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.style.display = cartPopup.style.display === 'block' ? 'none' : 'block';
}

function clearCart() {
    localStorage.removeItem('cart');
    updateCartItems();
}


document.getElementById('sort').addEventListener('change', (event) => {
    loadGoods(event.target.value);
});


window.onload = () => {
    loadGoods();
    updateCartItems();
};
