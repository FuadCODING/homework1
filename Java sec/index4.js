const year = prompt('укажите год')
var a = year % 400;
var b = year % 4;
var c = year % 100;
if (b == 0 && c !== 0) {
  alert("високосный год");
}
else if(a==0) {alert('високосный год')}

else {alert('невисокосный год')}
