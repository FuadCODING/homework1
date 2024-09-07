function promptCalculator() {
 
    let expression = prompt("Введите математический пример (например, 10 + 5):");
    
    
    if (!expression) {
        alert("Ввод не может быть пустым.");
        return;
    }

  
    const regex = /^(-?\d+\.?\d*)\s*([+\-*/])\s*(-?\d+\.?\d*)$/;
    const match = expression.match(regex);

    if (!match) {
        alert("Неверное выражение.");
        return;
    }

   
    const [ , operand1, operator, operand2 ] = match;

    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);

    let result;

 
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Ошибка: деление на ноль.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Неподдерживаемый оператор.");
            return;
    }

 
    alert("Результат: " + result);
}

promptCalculator();
