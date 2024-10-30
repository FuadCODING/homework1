const goods = [
    { id: 'first', name: "Товар 1", price: 5 },
    { id: 'sec', name: "Товар 2", price: 6 },
    { id: 'third', name: "Товар 3", price: 7 },
    { id: 'fourth', name: "Товар 4", price: 8},
    { id: 'fifth', name: "Товар 5", price: 9 },
];

function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const from = parseFloat(params.get('from'));
    const to = parseFloat(params.get('to'));
    return { from, to };
}

function filterGoodsByPrice(goods) {
    const { from, to } = getQueryParams();
    return goods.filter(good => {
        const price = good.price;
        return (isNaN(from) || price >= from) && (isNaN(to) || price <= to);
    });
}

function displayGoods() {
    const filteredGoods = filterGoodsByPrice(goods);
    const productList = document.getElementById('product-list');

    productList.innerHTML = '';

    if (filteredGoods.length === 0) {
        productList.innerHTML = '<p>Товары не найдены.</p>';
        return;
    }

    filteredGoods.forEach(good => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `<strong>${good.name}</strong><br>Price: ${good.price}`;
        productList.appendChild(productDiv);
    });
}

document.getElementById('filter-btn').addEventListener('click', () => {
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const newUrl = `?from=${from}&to=${to}`;
    window.history.pushState({}, '', newUrl);
    displayGoods();
});

displayGoods();