function calc(op) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var calc = 0;

    switch (op) {
        case '+': calc = num1 + num2; break;
        case '-': calc = num1 - num2; break;
        case '*': calc = num1 * num2; break;
        case '/': calc = num1 / num2; break;
    }

    var output = document.getElementById("output").value = calc;

    var newHistory = "<p>" + num1 + " " + op + " " + num2 + " = " + calc + "</p>";
    var history = document.getElementById("history");

    history.innerHTML = newHistory + history.innerHTML

    if (history.children.length > 10) {
        history.removeChild(history.childNodes[10]);
    }
}