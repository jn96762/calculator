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
    updateDisplay(String(currentNumber));
}

function percentage() {
    currentNumber /= 100;
    updateDisplay(String(currentNumber));
}

function updateDisplay(n) {
    trimmed = n.substring(0, 10);
    document.querySelector(".display").textContent = trimmed;
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
    updateDisplay(String(firstNumber));
    displayValue = "";
}

function takeEquals() {
    if (firstNumber != null) {
        if (pressed) {} else {
            result = operate(firstNumber, currentNumber);
            updateDisplay(String(result));
            currentNumber = result;
            firstNumber = result;
            displayValue = "";
            firstRound = true;
            pressed = true;
        }
    } else {}
}

document.addEventListener("keydown", function (e) {
    if (e.key === "0" || e.key === "1" || e.key === "2" || e.key === "3" || e.key === "4" || e.key === "5" || e.key === "6" || e.key === "7" || e.key === "8" || e.key === "9" || e.key === ".") {
        takeInput(e.key);
    } else if (e.key === "/" || e.key === "*" || e.key === "-" || e.key === "+") {
        takeOperation(e.key);
    } else if (e.key === "=" || e.key === "Enter") {
        takeEquals(e.key);
    } else if (e.key === "%") {
        percentage(e.key);
    } else if (e.key === "–") {
        plusMinus(e.key);
    } else {}
}); 