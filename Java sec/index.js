const age = prompt("укажите возраст");
if (age <= 2) {
  alert("вы ребенок");
} else if (18 >= age && age >= 12) {
  alert("вы подросток");
} else if (18 <= age && age <= 60) {
  alert("вы взрослый");
} else if (age >= 60) {
  alert("вы старик");
}
