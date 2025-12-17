const sumAll = function(start, end) {
  if (!(Number.isInteger(start) && Number.isInteger(end))
     || (start < 1 || end < 1)
     || (start % 1 !== 0 || end % 1 !== 0)) {
    return "ERROR";
  }

  if (start > end) {
    let temp = end;
    end = start;
    start = temp;
  }
  let sum = 0;
  while(start <= end) {
    sum += start;
    ++start;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
