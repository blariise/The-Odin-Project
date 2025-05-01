const reverseString = function(string) {
  let result = "";
  const temp_array = string.split("");
  for (let i = temp_array.length - 1; i >= 0; --i) {
    result += temp_array[i];
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
