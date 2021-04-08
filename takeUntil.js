const takeUntil = (array, callback) => {
  // for (const [i, value] of array.entries()) if (callback(value)) return array.slice(0, i);
  // return array;

  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      result = array.slice(0, i); // 2 parameters for slice are 0=start, i =stops(retains value of the array index of what evaluates to true, stops before that element (not including last element)) | i = truthy || result is reassigned to = array.slice
      console.log(result);
      break; // this will stop the loop continuing on to another occurence
    }
  }
  return result;
};

module.exports = takeUntil;

let array = [-6, -3, -2, 1, 2, 3, 6, 8, 9];
console.log(takeUntil(array, (n) => n > 3));

/*
let index = array.findIndex(callback); // this findIndex returns the index of the 1st occurences where it evaluates to true
let resultValue = array.slice(0, index);
console.log(resultValue);
return resultValue;
*/

/////////////////// TESTING FUNCTIONS

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
const results1 = takeUntil(array, (n) => n > 3);
console.log("RESULTS 1; " + results1);

const expectedResults1 = [-6, -3, -2, 1, 2, 3];

assertArraysEqual(expectedResults1, results1); // what it should return Vs. what it is actually returning
