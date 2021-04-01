const eqArrays = (a, b) => {
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
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed`); // based on the assertion
  } else {
    console.log(`🛑🛑🛑 Assertion Failed`);
  }
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1, 5]), false); // => should FAIL

/*
const name = "Anthony" 
const sayHello = function (name) { // unique var that only function can access
  console.log(`Hello ${name}`);
}
*/
