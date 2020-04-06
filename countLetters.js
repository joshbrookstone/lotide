const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀 Assertion Passed: ${[actual]} === ${[expected]}`);
  } else {
    console.log(`👿👿👿 Assertion Failed: ${[actual]} !== ${[expected]}`);
  }
};

const countLetters = function(theWord) {
  let result = {};
  for (const letter of theWord) {
    if (!result[letter]) {
      result[letter] = 1;
    } else {
      result[letter]++;
    }
  }
  return result;
};

console.log(countLetters('lighthouse'));

