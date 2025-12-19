/**
 * Returns the sum of two numbers
 * @param {number} a First operand
 * @param {number} b Second operand
 * @returns {number} Sum of a and b
 */
function add(a, b) {
    return a + b;
}

/**
 * Returns the difference of two numbers
 * @param {number} a First operand
 * @param {number} b Second operand
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Main calculation dispatcher
 * Calls the correct operation based on user selection
 */
function calculate() {
    const number1 = Number(document.getElementById("number1").value);
    const number2 = Number(document.getElementById("number2").value);
    const operation = document.getElementById("operation").value;

    let result = 0;

    if (operation === "add") {
        result = add(number1, number2);
    }

    if (operation === "subtract") {
        result = subtract(number1, number2);
    }

    document.getElementById("result").textContent = "Result: " + result;
}
