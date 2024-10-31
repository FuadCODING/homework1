const carsArr = [
    { brand: "BMW", model: "X5", year: 2023, Used: "yes" },
    { brand: "BMW", model: "3 Series", year: 2022, Used: "no" },
    { brand: "Ford", model: "Mustang", year: 2021, Used: "no" },
    { brand: "Ford", model: "F-150", year: 2020, Used: "yes" },
    { brand: "Mazda", model: "CX-5", year: 2023, Used: "no" },
    { brand: "Mazda", model: "Mazda3", year: 2021, Used: "no" },
    { brand: "Toyota", model: "Camry", year: 2022, Used: "yes" },
    { brand: "Toyota", model: "Corolla", year: 2021, Used: "yes" }
];

const cars = document.getElementById('cars');
let selectedFilters = {
    brand: null,
    status: 'all',
    year: 'all'
};

function filterCars() {
    const { brand, status, year } = selectedFilters;

    let filteredCars = carsArr.filter((item) => 
        (brand === null || item.brand === brand) &&
        (status === 'all' || item.Used === status) &&
        (year === 'all' || item.year.toString() === year)
    );

    cars.innerHTML = '';
    filteredCars.forEach((item) => {
        let li = document.createElement('li');
        li.innerText = `${item.model} - ${item.year} (${item.Used === "yes" ? "Used" : "New"})`;
        cars.appendChild(li);
    });
}

document.querySelectorAll('.filter-option').forEach((option) => {
    option.addEventListener('click', (event) => {
        const filterType = event.target.getAttribute('data-filter');
        const filterValue = event.target.getAttribute('data-value');
        
        selectedFilters[filterType] = filterValue === 'all' ? 'all' : filterValue;

        document.querySelectorAll(`.filter-option[data-filter="${filterType}"]`).forEach(el => {
            el.classList.remove('selected');
        });
        event.target.classList.add('selected');

        
        filterCars();
    });
});
