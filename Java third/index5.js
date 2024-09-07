let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
for (let i = 0; i < 10; i++) {
  n = +prompt("");
  if (n > 0) {
    a += 1;
  } else if (n < 0) {
    b += 1;
  } else {
    c += 1;
  }
  if (n % 2 == 0) {
    d += 1;
  } else {
    e += 1;
  }
}
alert(`положительных${a}отрицательных${b}нулнвых${c}четных${d}нечетных${e}`);
