let goodsData = []; 

function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; 
    let totalPrice = 0;

    cart.forEach(item => {
        const productHTML = `
            <div class="product">
                <img src="${item.image}" alt="${item.name}">
                <div class="product-info">
                    <h3>${item.name}</h3>
                    <p>${item.price} руб.</p>
                    <div class="actions">
                        <a href="#" onclick="removeFromCart('${item.id}')">Удалить</a>
                    </div>
                </div>
            </div>
        `;
        cartItemsContainer.innerHTML += productHTML;
        totalPrice += parseFloat(item.price);
    });

    document.getElementById('total').innerText = `Итого: ${totalPrice} руб.`;
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

function clearCart() {
    localStorage.removeItem('cart');
    loadCart();
}

function continueShopping() {
    window.location.href = 'catalog.html';
}


async function submitOrder(event) {
    event.preventDefault(); 

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Корзина пуста');
        return;
    }

    const orderItems = cart.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price
    }));

    const order = {
        customerName: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        items: orderItems
    };

    try {
        const response = await fetch('http://localhost:5000/add-orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });

        const result = await response.json();
        alert(result.text);
        clearCart();
    } catch (error) {
        console.error('Ошибка при оформлении заказа:', error);
    }
}

window.onload = loadCart;
