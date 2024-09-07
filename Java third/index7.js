let base_number = Math.abs(
    Math.trunc(+prompt("Введите число "))
  );
  let jump = Math.abs(
    Math.trunc(
      +prompt("Введите сдвиг: ")
    )
  );
  let array = [];
  let new_base_number = base_number;
  while (base_number > 0) {
    array.unshift(base_number % 10);
    base_number = Math.trunc(base_number / 10);
  } 
  let new_jump = jump;
  jump = jump % array.length; 
  let arrJumpLeft_L = [];
  let arrJumpLeft_R = [];
  let arrJumpRight_L = [];
  let arrJumpRight_R = [];
  for (let i = 0; i < array.length; i++) {
    if (i < jump) {
      arrJumpLeft_L[i] = array[i];
    } else {
      arrJumpLeft_R[i] = array[i];
    }
    if (i < array.length - jump) {
      arrJumpRight_L[i] = array[i];
    } else {
      arrJumpRight_R[i] = array[i];
    }
  }
   side = prompt('введите сторону лево или право')
   if (side='лево') {  alert(
    `Сдвиг влево "${new_base_number}" на ${new_jump} позиции: ` +
      arrJumpLeft_R.concat(arrJumpLeft_L).join(""))
   }
   else if(side='право'){ alert(
    `Сдвиг вправо "${new_base_number}" на ${new_jump} позиции: ` +
      arrJumpRight_R.concat(arrJumpRight_L).join("")
  ); 
   }
