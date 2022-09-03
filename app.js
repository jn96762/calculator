let displayValue = "";
let firstNumber = null;
let currentNumber = null;
let result = null;
let operation = "";
let firstRound = true;
let pressed = false;
let inDecimal = false;



function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b) {
    switch (operation) {
        case "+":
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null
    }
}

function clearDisplay(press) {
    updateDisplay(press);
    displayValue = "";
    firstNumber = null;
    currentNumber = null;
    operation = "";
    firstRound = true;
    pressed = false;
}

function plusMinus() {
    currentNumber *= -1;
    updateDisplay(currentNumber);
}

function percentage() {
    currentNumber /= 100;
    updateDisplay(currentNumber);
}

function updateDisplay(n) {
    document.querySelector(".display").textContent = n;
}



function takeInput(press) {
    if (document.querySelector(".display").textContent === "0" && press === "0") {
        currentNumber = 0;
    } else if (document.querySelector(".display").textContent === "0" && press === ".") {
        displayValue = "0.";
        updateDisplay(displayValue);
        currentNumber = 0;
        console.log(currentNumber);
        pressed = false;
    } else {
        displayValue += press;
        updateDisplay(displayValue);
        currentNumber = Number(displayValue);
        pressed = false;
    }
}

function takeOperation(press) {

    if (document.querySelector(".display").textContent === "0") {
        firstNumber = 0;
    }

    if (firstRound) {
        operation = press;
        firstNumber = currentNumber;
        currentNumber = null;
        firstRound = false;
    } else {
        result = operate(firstNumber, currentNumber);
        firstNumber = result;
        operation = press;
    };
    updateDisplay(firstNumber);
    displayValue = "";
}

function takeEquals() {
    if (firstNumber != null) {
        if (pressed) {} else {
            result = operate(firstNumber, currentNumber);
            updateDisplay(result);
            currentNumber = result;
            firstNumber = result;
            displayValue = "";
            firstRound = true;
            pressed = true;
        }
    } else {}
}