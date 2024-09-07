let receipt = [
    { name: "apple", quantity: 2, pricePerUnit: 1.5 },
    { name: "milk", quantity: 1, pricePerUnit: 2 },
    { name: "cake", quantity: 1, pricePerUnit: 10 },
    { name: "bread", quantity: 3, pricePerUnit: 1 }
];

function printReceipt(a) {
    console.log("Чек:");
    a.forEach(item => {
        console.log(`${item.name} - ${item.quantity} шт. по ${item.pricePerUnit} у.е. за единицу`);
    });
}

function calculateTotal(a) {
    let total = a.reduce((sum, item) => sum + item.quantity * item.pricePerUnit, 0);
    console.log(`Общая сумма покупки: ${total} у.е.`);
    return total;
}

function getMostExpensive(a) {
    let mostExpensive = a.reduce((prev, current) => (prev.pricePerUnit * prev.quantity > current.pricePerUnit * current.quantity) ? prev : current);
    console.log(`Самая дорогая покупка: ${mostExpensive.name} на сумму ${mostExpensive.pricePerUnit * mostExpensive.quantity} у.е.`);
    return mostExpensive;
}
function calculateAveragePrice(a) {
    let totalItems = a.reduce((sum, item) => sum + item.quantity, 0);
    let totalPrice = calculateTotal(a);
    let averagePrice = totalPrice / totalItems;
    console.log(`Средняя стоимость одного товара: ${averagePrice.toFixed(2)} у.е.`);
    return averagePrice;
}
printReceipt(receipt);
calculateTotal(receipt);
getMostExpensive(receipt);
calculateAveragePrice(receipt);