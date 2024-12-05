console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}
// Part 2: Even / Odd
const number = 4;

if (number % 2 == 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;
let pricePerHotdog;

if (numberOfHotdogs < 5) {
  pricePerHotdog = 2;
} else if (numberOfHotdogs < 100) {
  pricePerHotdog = 1.5;
} else if (numberOfHotdogs < 1000000) {
  pricePerHotdog = 1;
} else {
  pricePerHotdog = 0.1;
}

let totalPrice = numberOfHotdogs * pricePerHotdog;
console.log(totalPrice);

// Part 4: Daytime
const currentHour = 10;

const statement = currentHour < 17 ? "Still need to learn" : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Roland";

const greeting = "Hello " + (userName === "Roland" ? "Coach" : userName) + "!";

console.log(greeting);
