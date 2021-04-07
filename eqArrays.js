const assertEqual = require("./assertEqual");

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

module.exports = eqArrays;

// const assertEqual = function (actual, expected) {
//   // prints passed or failed
//   //let actual = "";
//   // let expected = "";
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed:  ${actual}  === ${expected}`); // based on the assertion
//   } else if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
//console.log(assertEqual);

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1, 5]), false); // => should FAIL

//console.log(assertEqual);
