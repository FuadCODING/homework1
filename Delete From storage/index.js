let goods = [
    { id: 1, name: 'Товар 1' },
    { id: 2, name: 'Товар 2' },
    { id: 3, name: 'Товар 3' },
];

function displayProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    goods.forEach(product => {
        const productElement = document.createElement('div');
        productElement.id = `product-${product.id}`;
        productElement.innerHTML = `
            <span>${product.name}</span>
            <button onclick="removeProduct(${product.id})">Удалить</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

function removeProduct(productId) {
    goods = goods.filter(product => product.id !== productId);

    localStorage.setItem('goods', JSON.stringify(goods));

    const productElement = document.getElementById(`product-${productId}`);
    if (productElement) {
        productElement.remove();
    }
}

displayProducts();
