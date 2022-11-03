
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

function clearLastInputElement() {
    let val = input.value;
    val = val.substring(0, val.length - 1);
    input.value = val;
}

function display(value) {
    input.value += value;
}


function numFunc(value) {
    if (input.value == "Infinity") clearInput();
    display(value);

}

function opFunc1(operator) {
    if (input.value == "Infinity") clearInput();
    updateOperands();
    if (firstOperand == null || firstOperand == "") return;

    calculate();
    if (!isNum(input.value.slice(-1)[0])) { clearLastInputElement(); }
    updateOperands();

    var result;
    if (operator == '√') {
        result = Math.sqrt(parseFloat(firstOperand));
    }
    else if (operator == '²') {
        result = Math.pow(parseFloat(firstOperand), 2);
    }
    else if (operator == '³') {
        result = Math.pow(parseFloat(firstOperand), 3);
    }

    clearInput();
    display(Number(result.toFixed(3)));
}


function opFunc2(operator) {
    if (input.value == "Infinity") clearInput();
    updateOperands();
    if (firstOperand == null || firstOperand == "") return;

    if (!isNum(input.value.slice(-1)[0])) {
        clearLastInputElement();
        display(operator);
        previousOperator = operator;
        return;
    }

    updateOperands();

    display(operator);
    if (secondOperand != null) {
        calculate();
        if (input.value != "Infinity")
            display(operator);
    }

    previousOperator = operator;
}

function eqFunc() {
    if (input.value == "Infinity") clearInput();
    updateOperands();
    calculate();
}

function updateOperands() {
    firstOperand = input.value.split(previousOperator)[0];
    secondOperand = input.value.split(previousOperator)[1];
}

function calculate() {
    console.log(firstOperand, secondOperand, previousOperator);
    if (secondOperand != null && secondOperand != "") {
        clearInput();
        var result;
        if (previousOperator == '+')
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
        else if (previousOperator == '-')
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
        else if (previousOperator == "*")
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
        else if (previousOperator == "/")
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
        else if (previousOperator == "%")
            result = parseFloat(firstOperand) % parseFloat(secondOperand);

        display(Number(result.toFixed(3)));
        previousOperator = null;
        secondOperand = null;
    }
}