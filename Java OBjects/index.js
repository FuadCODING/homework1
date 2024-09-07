
let car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2020,
    averageSpeed: 80 
};
function displayCarInfo(car) {
    console.log(`Производитель: ${car.manufacturer}`);
    console.log(`Модель: ${car.model}`);
    console.log(`Год выпуска: ${car.year}`);
    console.log(`Средняя скорость: ${car.averageSpeed} км/ч`);
}
function calculateTravelTime(car, distance) {
    let travelTime = distance / car.averageSpeed; 
    let restTime = Math.floor(travelTime / 4); 
    let totalTime = travelTime + restTime; 
    console.log(`Для преодоления ${distance} км потребуется ${totalTime.toFixed(2)} часов, включая перерывы.`);
    return totalTime;
}
displayCarInfo(car);

calculateTravelTime(car, 500);
