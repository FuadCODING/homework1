const first = prompt('укажите трехзначное число')
let a = (first % 10) 
let b = (((first- a ) / 10) % 10)
let c = (first /100)
let d = (Math.floor(c))
console.log(a);
console.log(b);
console.log(d);
alert((a*100)+(b*10)+(d*1))


