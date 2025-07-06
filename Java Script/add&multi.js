function calculate() {
    // Get the values of the inputs
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    // Perform addition and multiplication
    const sum = num1 + num2;
    const product = num1 * num2;

    // Display the results
    document.getElementById("addition").innerText = "Addition: " + sum;
    document.getElementById("multiplication").innerText = "Multiplication: " + product;
}
