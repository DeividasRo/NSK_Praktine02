

function clearScreen() {
    document.getElementById("result").value = "";
}

function clearLastElement() {
    let val = document.getElementById("result").value;
    val = val.substring(0, val.length - 1);
    document.getElementById("result").value = val;
}


// This function display values
function display(value) {
    document.getElementById("result").value += value;
}

// This function evaluates the expression and returns result
function calculate() {
    sqrt = Math.sqrt;
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

// REMAKE WITHOUT EVAL. MAKE CALCS ONE AT A TIME