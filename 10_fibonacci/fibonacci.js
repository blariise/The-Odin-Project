const fibonacci = function(target) {
  if (target < 0)
    return "OOPS";
  if(target == 0)
    return 0;
  if (target == 1)
    return 1;
  return fibonacci(target - 1) + fibonacci(target - 2);
};

// Do not edit below this line
module.exports = fibonacci;
