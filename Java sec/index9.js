let a = Number(0);
const first = prompt("сколько сторон у квадрата: 2 , 3 , 4 ");
if (first == 4) {
  a += 2;
}
const sec = prompt("сколько сторон у треугольника: 2 , 3 , 4 ");
if (sec == 3) {
  a += 2;
}
const third = prompt("сколько сторон у шестеугольника: 2 , 3 , 6 ");
if (third == 6) {
  a += 2;
}
alert(a);
