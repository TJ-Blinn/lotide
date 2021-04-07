// const assertEqual = function (actual, expected) {
//   //let actual = "";
//   // let expected = "";
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed:  ${actual}  === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
const assertEqual = require("./assertEqual");

const tail = function (arr) {
  if (arr.length < 2) {
    // if array is 1 element long, return that element
    return arr;
  } else {
    return arr.slice(1); // if element is > 1, return array and slice out 1st element.
  }
};

//console.log(tail([1, 2, 3, 4, 5]));

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
// ************ NOTE: Our assertEqual function is too simple to compare array values. JavaScript doesn't allow the use of === or == to compare two arrays.

//Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
//console.log(assertEqual);
