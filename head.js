// const assertEqual = function (actual, expected) {
//   //let actual = "";
//   // let expected = "";
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed:  ${actual}  === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
//console.log(assertEqual);

const assertEqual = require("./assertEqual");

const head = function (array) {
  return array[0];
};

module.exports = head;

//////////////TEST CASES

//assertEqual(head([5, 6, 7]), 5);

// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), undefined);
// assertEqual(head([undefined]), undefined);
