let a = prompt('введите число')
  let c = 0;
  while (a > 0) {
  a = Math.trunc(a / 10)
    c++;
  }
alert(c)