
function Fraction(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
}
function addFractions(fraction1, fraction2) {
    let numerator = fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator;
    let denominator = fraction1.denominator * fraction2.denominator;
    return simplifyFraction(new Fraction(numerator, denominator));
}
function subtractFractions(fraction1, fraction2) {
    let numerator = fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator;
    let denominator = fraction1.denominator * fraction2.denominator;
    return simplifyFraction(new Fraction(numerator, denominator));
}
function multiplyFractions(fraction1, fraction2) {
    let numerator = fraction1.numerator * fraction2.numerator;
    let denominator = fraction1.denominator * fraction2.denominator;
    return simplifyFraction(new Fraction(numerator, denominator));
}
function divideFractions(fraction1, fraction2) {
    let numerator = fraction1.numerator * fraction2.denominator;
    let denominator = fraction1.denominator * fraction2.numerator;
    return simplifyFraction(new Fraction(numerator, denominator));
}
function simplifyFraction(fraction) {
    let gcd = greatestCommonDivisor(fraction.numerator, fraction.denominator);
    return new Fraction(fraction.numerator / gcd, fraction.denominator / gcd);
}


function greatestCommonDivisor(a, b) {
    return b === 0 ? a : greatestCommonDivisor(b, a % b);
}

let fraction1 = new Fraction(3, 4);
let fraction2 = new Fraction(5, 6);


let sum = addFractions(fraction1, fraction2);
console.log(`Сумма: ${sum.numerator}/${sum.denominator}`);


let difference = subtractFractions(fraction1, fraction2);
console.log(`Разность: ${difference.numerator}/${difference.denominator}`);

let product = multiplyFractions(fraction1, fraction2);
console.log(`Произведение: ${product.numerator}/${product.denominator}`);

let quotient = divideFractions(fraction1, fraction2);
console.log(`Частное: ${quotient.numerator}/${quotient.denominator}`);
