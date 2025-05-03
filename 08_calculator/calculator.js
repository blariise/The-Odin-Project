const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, num) => {
    return total + num 
  }, 0);
};

const multiply = function(arr) {
  if (arr.length === 0)
    return 0;
  return arr.reduce((total, num) => {
    return total * num;
  }, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
  if (a < 2) {
    return 1;
  }
  return a * factorial(a - 1);
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
