console.clear();

let operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');
// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--
addButton.addEventListener("click", () => {
  const result = operand1 + operand2;
  console.log("Addition:", "=", result);
});

subtractButton.addEventListener("click", () => {
  const result = operand1 - operand2;
  console.log("Subtraction:", "=", result);
});

multiplyButton.addEventListener("click", () => {
  const result = operand1 * operand2;
  console.log("Multiplication:", "=", result);
});

divideButton.addEventListener("click", () => {
  const result = operand1 / operand2;
  console.log("Division:", "=", result);
});

exponentButton.addEventListener("click", () => {
  const result = Math.pow(operand1, operand2);
  console.log("Exponent:", "=", result);
});

moduloButton.addEventListener("click", () => {
  const result = operand1 % operand2;
  console.log("Modulo:", "=", result);
});
// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--
const increaseOneButton = document.querySelector('[data-js="increase-by-one"]');
const increaseFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);
const decreaseOneButton = document.querySelector('[data-js="decrease-by-one"]');
const decreaseFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);
const multiplyTwoButton = document.querySelector('[data-js="multiply-by-two"]');
const divideTwoButton = document.querySelector('[data-js="divide-by-two"]');

increaseOneButton.addEventListener("click", () => {
  const value = (operand1 += 1);
  console.log("Operand 1 increased by One", "=", value);
});

increaseFiveButton.addEventListener("click", () => {
  const value = (operand1 += 5);
  console.log("Operand 1 increased by five", "=", value);
});

decreaseOneButton.addEventListener("click", () => {
  const value = (operand1 -= 1);
  console.log("Operand 1 decreased by one", "=", value);
});

decreaseFiveButton.addEventListener("click", () => {
  const value = (operand1 -= 5);
  console.log("Operand 1 decreased by five", "=", value);
});

multiplyTwoButton.addEventListener("click", () => {
  const value = (operand1 *= 2);
  console.log("Operand 1 multiplied by two", "=", value);
});

divideTwoButton.addEventListener("click", () => {
  const value = (operand1 /= 2);
  console.log("Operand 1 divided by two", "=", value);
});
// --^-- write your code here --^--
