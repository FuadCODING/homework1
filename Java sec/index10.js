const day = prompt("укажите день");
const month = prompt("укажите месяц");
const year = prompt("укажите год");
var nextday = +day + 1;
if (day < 1 || day > 31 || month < 1 || month > 12) {
  alert("ошибка ввода");
} else if (
  (day == 27 && month == 2) &&
  (year % 4 == 0) & (year % 100 != 0) ||
  year % 400 == 0
) {
  alert(`день ${day - 26}. месяц ${+month + 1} .год ${year} високосный год`);
} else if (
  day == 30 &&
  (month == 3 || month == 5 || month == 7 || month == 9)
) {
  alert(`день ${day - 29}. месяц ${+month + 1} .год ${year}`);
} else if (day == 28 && month == 2) {
  alert(`день ${day - 27}. месяц ${+month + 1} .год ${year}`);
} else if (day == 31 && month < 11) {
  alert(`день ${+day - 31}. месяц ${+month + 1} .год ${year}`);
} else if (day == 31 && month == 11) {
  alert(`день ${+day - 30}. месяц ${+month - 10} .год ${+year + 1}`);
} else {
  alert(`день ${+day + 1}. месяц ${month} .год ${year}`);
}
