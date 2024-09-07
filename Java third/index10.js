let N = 0;
  do {
    N = Math.trunc(
      +prompt("Введите целое число в диапазоне от 0 до 100 включительно: ")
    );
  } while (N < 0 || N > 100);
  alert(`Итак, будем играться с числом ${N}.`);

  let counter = 0; 
  let low = 0; 
  let middle = 0; 
  let high = 100; 
  let condition = ""; 

  while (low <= high) {
    middle = Math.trunc((low + high) / 2);
    condition = prompt(
      `Вы загадали число ${middle}? Введите "=", "<",  ">", `
    );
    

    if (condition != "=" && condition != "<" && condition != ">") {
      alert(
        "ошибка ввода"
      );
      continue;
      
    }
    if (
      (condition != "=" && middle == N) ||
      (condition == "<" && middle < N) ||
      (condition == ">" && middle > N) ||
      (condition == "=" && middle != N)
    ) {
      alert(
        `ошибка ввода`
      );
      continue;
    } 
    if (condition == ">") {
      low = middle + 1;
    } else if (condition == "<") {
      high = middle - 1;
    } else {
      low = high + 1;
    }
    counter++;
  }
  alert(
    `за ${counter} установили, что число ${middle}!`
  );