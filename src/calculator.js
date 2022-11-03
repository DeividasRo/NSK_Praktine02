
var input = document.getElementById('input'); // input/output button
var firstOperand = null;
var secondOperand = null;
var previousOperator = null;

function isNum(i) { return i >= '0' && i <= '9'; }

function clearInput() {
    input.value = "";
}

function resetInput() {
    input.value = "";
    firstOperand = null;
    secondOperand = null;
    previousOperator = null;
}

function clearLastElement() {
    let val = input.value;
    val = val.substring(0, val.length - 1);
    input.value = val;
}

function display(value) {
    input.value += value;
}


function numFunc(value) {
    display(value);
}

function opFunc(value) {
    twoOperandBehaviour(value);
}

function twoOperandBehaviour(operator) {
    if (!isNum(input.value.slice(-1)[0])) return;

    firstOperand = input.value.split(previousOperator)[0];
    secondOperand = input.value.split(previousOperator)[1];

    console.log(firstOperand, secondOperand);

    display(operator);
    if (secondOperand != null) {
        clearInput();
        var result;
        if (previousOperator == '+')
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
        if (previousOperator == '-')
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
        if (previousOperator == "*")
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
        if (previousOperator == "/")
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
        if (previousOperator == "%")
            result = parseFloat(firstOperand) % parseFloat(secondOperand);

        display(Number(result.toFixed(3)) + operator);
        previousOperator = null;
        secondOperand = null;
    }

    previousOperator = operator;


    // change color of operator in action
}