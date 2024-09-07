let listBuy = [
    { name: "apple", weight: 2, status: "no" },
    { name: "milk", weight: 1, status: "no" },
    { name: "cake", weight: 6, status: "yes" },
    { name: "bread", weight: 2, status: "yes" }
];

function displayList(a) {
    console.log("Не купленные продукты:");
    a.filter(item => item.status === "no").forEach(item => {
        console.log(`${item.name} - ${item.weight} шт.`);
    });
    
    console.log("\nКупленные продукты:");
    a.filter(item => item.status === "yes").forEach(item => {
        console.log(`${item.name} - ${item.weight} шт.`);
    });
}

function addFood(a) {
    let newFood = prompt("Для ввода нового продукта введите название: ");
    let newWeight = +prompt("Введите количество: ");

    let existingProduct = a.find(item => item.name === newFood);

    if (existingProduct) {
        existingProduct.weight += newWeight; 
        console.log(`Количество продукта "${newFood}" увеличено до ${existingProduct.weight}.`);
    } else {
        a.push({ name: newFood, weight: newWeight, status: "no" }); 
        console.log(`Продукт "${newFood}" добавлен в список.`);
    }
}


function markAsBought(a, productName) {
    let product = a.find(item => item.name === productName);

    if (product && product.status === "no") {
        product.status = "yes"; 
        console.log(`Продукт "${productName}" отмечен как купленный.`);
    } else if (product && product.status === "yes") {
        console.log(`Продукт "${productName}" уже куплен.`);
    } else {
        console.log(`Продукт "${productName}" не найден.`);
    }
}

displayList(listBuy);


addFood(listBuy);


markAsBought(listBuy, "milk");


displayList(listBuy);