function getNumbers() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    return { num1, num2 };
}

document.getElementById("add").addEventListener("click", function() {
    const { num1, num2 } = getNumbers();

    const result = num1 + num2;

    document.getElementById("result").textContent =
        "Result: " + result;
});
document.getElementById("subtract").addEventListener("click", function() {
    const { num1, num2 } = getNumbers();

    const result = num1 - num2;

    document.getElementById("result").textContent =
        "Result: " + result;
});
document.getElementById("multiply").addEventListener("click", function() {
    const { num1, num2 } = getNumbers();

    const result = num1 * num2;

    document.getElementById("result").textContent =
        "Result: " + result;
});
document.getElementById("divide").addEventListener("click", function() {
    const { num1, num2 } = getNumbers();

    if (num2 === 0) {
        document.getElementById("result").textContent =
            "Cannot divide by zero";
        return;
    }

    const result = num1 / num2;

    document.getElementById("result").textContent =
        "Result: " + result;
});
document.getElementById("divide").addEventListener("click", function() {
    const { numFirst, numSecond } = getNumbers();

    if (numSecond === 0) {
        document.getElementById("result").textContent =
            "Cannot divide by zero";
        return;
    }

    const result = numFirst / numSecond;

    document.getElementById("result").textContent =
        "Result: " + result;
});







