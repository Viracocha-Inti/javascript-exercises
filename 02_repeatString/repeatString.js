const repeatString = function (word, times) {
  if (times < 0) {
    let string = "ERROR";
    return string;
  }
  let string = word.repeat(times);
  return string;
};

// Do not edit below this line
module.exports = repeatString;
