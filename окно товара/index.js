
const goods = [
    { name: 'apple', price: 5, description: 'Описание товара' },
    { name: 'orange', price: 6, description: 'Описание товара' },
    { name: 'lemon', price: 7, description: 'Описание товара' }
];


function displayGoods() {
    const container = document.getElementById('goods-container');
    container.innerHTML = ''; 

    goods.forEach((good, index) => {
        const div = document.createElement('div');
        div.textContent = `${good.name} - ${good.price} ₽`;
        
        const button = document.createElement('button');
        button.textContent = 'Показать';
        button.onclick = () => showModal(good); 

        div.appendChild(button);
        container.appendChild(div);
    });
}


function showModal(good) {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('modal-overlay');
    
    document.getElementById('modal-title').textContent = good.name;
    document.getElementById('modal-description').textContent = good.description;

    modal.style.display = 'block'; 
    overlay.style.display = 'block'; 
}

function closeModal() {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('modal-overlay');
    
    modal.style.display = 'none'; 
    overlay.style.display = 'none'; 
}

document.getElementById('close-modal').onclick = closeModal;

displayGoods();
