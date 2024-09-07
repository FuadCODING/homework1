function numberToText(number) {
    if (number < 10 || number > 99) {
        throw new Error("Input must be a two-digit number.");
    }

    const ones = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
    const teens = ["десять", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];
    const tens = ["", "", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];

    let result = "";

    if (number < 20) {
        result = teens[number - 10];
    } else {    
        let ten = Math.floor(number / 10);
        let one = number % 10;

        result = tens[ten];
        if (one > 0) {
            result += " " + ones[one];
        }
    }

    return result;
}


console.log(numberToText(35)); 
console.log(numberToText(89)); 
console.log(numberToText(12)); 