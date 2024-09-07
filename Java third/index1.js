let a = Math.trunc (prompt ('введите начялный диапазон'))
let b = Math.trunc (prompt ('введите конечный диапазон'))
let c = 0
while (b > a) {
    c += a
    a++;
}
alert (`ответ ${c}`)

