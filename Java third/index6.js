do{
let a = +prompt("первое число")
let c = prompt("знак операций")
let b = +prompt("второе число")
if (c== '+') {alert(a + b)}   
else if (c== '-') {alert(a - b)} 
else if (c== '*') {alert(a * b)} 
else if (c== '/') {alert(a / b)} 
else {alert('калькулятор не предназначен для этого')}
again = confirm("Хотите выполнить еще одну математическую операцию?");
}
while (again == true) 
    
