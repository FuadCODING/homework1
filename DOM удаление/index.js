const goods = [
    { name: 'Apple', price: 5 },
    { name: 'Orange', price: 6 },
    { name: 'Lemon', price: 7 }
];
function displayGoods() {
    const container = document.getElementById('goods-container');
    container.innerHTML = ''; 

    goods.forEach(good => {
        const div = document.createElement('div');
        div.textContent = `${good.name} - ${good.price} ₽`;
        div.setAttribute('id', good.name); 
        container.appendChild(div);
    });
}

function removeGoodById() {
    const id = document.getElementById('remove-id').value; 
    const index = goods.findIndex(good => good.name === id);
    if (index !== -1) {
        goods.splice(index, 1); 
        displayGoods(); 
        document.getElementById('remove-id').value = ''; 
    } else {
        alert('Error');
    }
}

displayGoods();