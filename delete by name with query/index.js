const goodsArr = [
    { name: "Apple", price: 10 },
    { name: "Banana", price: 5 },
    { name: "Orange", price: 8 },
    { name: "Starberry", price: 15 },
    { name: "Lemon", price: 25 },
    { name: "Watermelon", price: 45 },
    { name: "Fig ", price: 14 },
    { name: "Kiwi ", price: 12 },
];

const goodsList = document.getElementById('goods');
const deleteInput = document.getElementById('deleteName');
const deleteButton = document.getElementById('deleteButton');

function displayGoods() {
    goodsList.innerHTML = '';
    goodsArr.forEach((item) => {
        let li = document.createElement('li');
        li.innerText = `${item.name} - price: ${item.price}`;
        goodsList.appendChild(li);
    });
}
function deleteGoodByName(name) {
    const index = goodsArr.findIndex((item) => item.name.toLowerCase() === name.toLowerCase());
    if (index !== -1) {
        goodsArr.splice(index, 1); 
        displayGoods(); 
        alert(`Item "${name}" has been deleted.`);
    } else {
        alert(`Item "${name}" not found.`);
    }
}
deleteButton.addEventListener('click', () => {
    const nameToDelete = deleteInput.value.trim();
    if (nameToDelete) {
        deleteGoodByName(nameToDelete);
        deleteInput.value = ''; 
    } else {
        alert("Please enter a valid name.");
    }
});
displayGoods();
