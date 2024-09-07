let table = "";
  for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
      table += `${i} x ${j} = ` + i * j + ", ";
    }
  }
  alert(table);
