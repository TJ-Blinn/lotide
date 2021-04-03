const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    // console.log("item BEFORE: ", item); item = full word
    // console.log("item AFTER: ", callback(item)); callback(item) = 1st letter of word
    // console.log("---");
  }
  return results;
};

// assertArraysEqual.js to test our new map function

const eqArrays = (a, b) => {
  // boolean value
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

const assertArraysEqual = function (arr1, arr2) {
  // print out resuts
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed`); // based on the assertion
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`);
  }
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1, 5]), false); // => should FAIL

/// TEST CASES BELOW
const results1 = map(words, (word) => word[0]); // map function 2 parameters: words(array) and callback function [0]
console.log(results1);

const expectedResults1 = ["g", "c", "t", "m", "t"];

assertArraysEqual(expectedResults1, results1); // what it should return Vs. what it is actually returning
