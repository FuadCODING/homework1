let a = +prompt("Введите первое число: ");
let b = +prompt("Введите второе число: ");
let c = 1;
let i = 1;
while (i <= a && i <= b) {
  if (a % i == 0 && b % i == 0) {
    c = i;
  }
  i++;
}
alert(`У чисел ${a} и ${b} наибольший общий делитель: ${c}`);