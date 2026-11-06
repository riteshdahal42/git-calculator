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