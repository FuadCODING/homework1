const number = prompt("укажите число");
let a = (number % 10) 
let b = (((number- a ) / 10) % 10)
let c = (number/100)
let d = (Math.floor(c))
if(a==b ||a==d||b==d){alert('есть одинаковые числа')}
else{alert("нет одинаковых чисел")}