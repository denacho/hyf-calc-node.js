#!/usr/bin/env node

const { add, subtract, multiply, divide } = require("./calc");

const OPERATIONS = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide
};

function usage() {
  console.log("Usage: hyf-calc NUMBER OPERATION NUMBER");
  console.log();
  console.log("Addition: hyf-calc 123 + 786");
  console.log("Subtraction: hyf-calc 232 - 908");
  console.log("Multiplication: hyf-calc 123 \\* 903");
  console.log("Division: hyf-calc 776 / 231");
  console.log();
}

if (process.argv.length !== 5) {
  usage();
  process.exit(1);
}
let number1 = process.argv[2];
const op = process.argv[3];
let number2 = process.argv[4];

number1 = parseFloat(number1);
number2 = parseFloat(number2);
if (isNaN(number1) || isNaN(number2)) {
  usage();
  process.exit(1);
}

if (!Object.keys(OPERATIONS).includes(op)) {
  usage();
  process.exit(1);
}

const opFn = OPERATIONS[op];
const result = opFn(number1, number2);
console.log(result);
