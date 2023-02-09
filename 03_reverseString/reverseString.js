const reverseString = function (string) {
  let word = string;
  let spread = [];
  let backward = [];
  let backwardWord;
  spread = word.split("");
  backward = spread.reverse();
  backwardWord = backward.join("");
  return backwardWord;
};

// const reverseString = function(string) {
//     return string.split('').reverse().join('');
//    };

// Do not edit below this line
module.exports = reverseString;
