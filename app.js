let displayValue = "";
let firstNumber = null;
let currentNumber = null;
let result = null;
let operation = "";
let firstRound = true;


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
    console.log("clear");
    updateDisplay(press);
    displayValue = "";
    firstNumber = null;
    currentNumber = null;
    operation = "";
    firstRound = true;
}

function plusMinus() {
    currentNumber *= -1;
}

function percentage() {
    currentNumber /= 100;
}

function updateDisplay(n) {
    console.log(n);
    document.querySelector(".display").textContent = n;
}



function takeInput(press) {
    if (press === "0" && document.querySelector(".display").textContent === "0") {} else {
        displayValue += press;
        updateDisplay(displayValue);
        currentNumber = Number(displayValue);
    }
}

function takeOperation(press) {

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
    result = operate(firstNumber, currentNumber);
    currentNumber = result;
    firstNumber = result;
    updateDisplay(result);
    displayValue = "";
    firstRound = true;
}