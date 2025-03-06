let display = document.getElementById("display");
let memory = 0;

function isOperator(char) {
    let operators = ['+', '-', 'x', '/', '%'];
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === char) {
            return true; 
        }
    }
    return false; 
}

function appendCharacter(char) {
    let lastChar = display.value[display.value.length - 1];

    if (isOperator(lastChar) && isOperator(char)) {
        if (lastChar === char) {
            return; 
        } else {
            display.value = display.value.slice(0, -1) + char; 
            return;
        }
    }

    if (display.value === "0" && char !== ".") {
        display.value = char;
    } else {
        display.value += char;
    }
}

function clearDisplay() {
    display.value = "0";
}

function clearEntry() {
    display.value = display.value.slice(0, -1);
    if (display.value === "") display.value = "0";
}

function backspace() {
    display.value = display.value.slice(0, -1);
    if (display.value === "") display.value = "0";
}

function calculateResult() {
    let expression = display.value;
    let result = '';
    let operator = '';
    let num1 = '';
    let num2 = '';

    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];
        if (char >= '0' && char <= '9' || char === '.') {
            if (operator === '') {
                num1 += char;
            } else {
                num2 += char;
            }
        } else {
            operator = char;
        }
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === 'x') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num2 !== 0 ? num1 / num2 : 'Error';
    } else if (operator === '%') {
        result = num1 % num2;
    }

    display.value = result;
}