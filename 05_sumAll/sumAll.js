const sumAll = function (num1, num2) {
  let sum = 0;
  if (num2 < 0 || num1 < 0) {
    return "ERROR";
  }
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR";
  }
  if (num1 > num2) {
    const realMax = num1;
    num1 = num2;
    num2 = realMax;
  }
  for (i = num1; i <= num2; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
