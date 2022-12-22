var operator;

document.getElementById("clear").onclick = clear;

function clear() {
    console.log("clear");
    document.getElementById("num1").value = 0;
    document.getElementById("num2").value = 0;
    document.getElementById("result").value = "";
}

function calculate() {
    console.log("calc")

    var result;

    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);

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
            result = num1 / num2;
            break; 
    }

    document.getElementById("result").innerHTML = result;
}