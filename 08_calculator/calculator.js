const add = function(firstNumber, secondNumber) {
  return firstNumber + secondNumber;	
};

const subtract = function(firstNumber, secondNumber) {
  return firstNumber - secondNumber;	
};

const sum = function(array) {
  return array.reduce((accumulator, item) => accumulator + item, 0);
};

const multiply = function(array) {
  return array.reduce((accumulator, item) => accumulator * item);
};

const power = function(base, pow) {
  return 	base ** pow;
};

const factorial = function(number) {
  let total = 1;
  if (number === 0 || number === 1) {
    return 1;
  }

  for (let i = 2; i <= number; i++) {
    total *= i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
