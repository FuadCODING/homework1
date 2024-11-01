const fordModels = ["Focus", "Mustang", "Explorer"];
const mbvModels = ["C-Class", "E-Class", "S-Class"];

const fordModelSelect = document.getElementById("ford-model");
const mbvModelSelect = document.getElementById("mbv-model");
const totalPriceElement = document.getElementById("total-price");
const buyButton = document.getElementById("buy-button");

let selectedCar = "";

function populateModels(selectElement, models) {
  selectElement.innerHTML = "";
  models.forEach(model => {
    const option = document.createElement("option");
    option.value = model;
    option.textContent = model;
    selectElement.appendChild(option);
  });
}

function calculateTotalPrice() {
  let totalPrice = 0;
  document.querySelectorAll(".option").forEach(option => {
    if (option.checked) {
      totalPrice += parseInt(option.getAttribute("data-price"));
    }
  });
  totalPriceElement.textContent = totalPrice;
}

function updateSelectedCar() {
  const fordModel = fordModelSelect.value;
  const mbvModel = mbvModelSelect.value;

  if (fordModel) {
    selectedCar = `Ford ${fordModel}`;
    mbvModelSelect.value = "";
  }

  if (mbvModel) {
    selectedCar = `MBV ${mbvModel}`;
    fordModelSelect.value = "";
  }
}

fordModelSelect.addEventListener("change", updateSelectedCar);
mbvModelSelect.addEventListener("change", updateSelectedCar);

document.querySelectorAll(".option").forEach(option => {
  option.addEventListener("change", calculateTotalPrice);
});

buyButton.addEventListener("click", () => {
  if (!selectedCar) {
    alert("Пожалуйста, выберите автомобиль перед покупкой.");
    return;
  }
  alert(`Вы купили автомобиль ${selectedCar} с общей стоимостью ${totalPriceElement.textContent} руб.`);
});

populateModels(fordModelSelect, fordModels);
populateModels(mbvModelSelect, mbvModels);
calculateTotalPrice();
