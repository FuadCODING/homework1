const number = prompt("Введите число");
var b = Math.floor(number / 10000);
var c = number % 10;
var d = ((number - c) / 10) % 10;
var e = Math.floor((number - b * 10000) / 1000);
var f = Math.floor((number - b * 10000 - e * 1000) / 100);

if (b == c && e == d) {
  alert("число является палиндромом");
} else {alert 
  ("число обычное");
}





