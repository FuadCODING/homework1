let goods = [
  { name: "Товар 1", price: 100 },
  { name: "Товар 2", price: 200 },
  { name: "Товар 3", price: 300 },
];

function displayGoods(array) {
  const container = document.getElementById("goods-container");
  container.innerHTML = "";

  array.forEach((good) => {
    const div = document.createElement("div");
    div.textContent = `${good.name} - ${good.price} ₽`;
    container.appendChild(div);
  });
}

function addGood() {
  const name = document.getElementById("name").value.trim();
  const price = parseFloat(document.getElementById("price").value);

  if (name && !isNaN(price) && price >= 0) {
    goods.push({ name, price });
    displayGoods(goods);
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
  } else {
    alert("error");
  }
}

function filterGoods() {
  const minPrice = parseFloat(document.getElementById("min-price").value);
  const maxPrice = parseFloat(document.getElementById("max-price").value);

  const filteredGoods = goods.filter((good) => {
    let isWithinRange = true; 

    if (minPrice) {
      if (good.price < minPrice) {
        isWithinRange = false;
      }
    }

    if (maxPrice) {
      if (good.price > maxPrice) {
        isWithinRange = false;
      }
    }

    return isWithinRange;
  });

  displayGoods(filteredGoods);
}
displayGoods(goods);
