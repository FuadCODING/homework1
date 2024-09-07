
  let a = (+prompt("Введите число: "));
  let c = "";
  let b = 1;
  do {
    if (a % b == 0) {
      c += b+',';
    }
   b++;
  } while (b <= a);
  alert(`У числа ${a} следующие делители: ${c}`);
