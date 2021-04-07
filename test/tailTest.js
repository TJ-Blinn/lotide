const assertEqual = require("../assertEqual");
const tail = require("../tail");
console.log(tail);
// Test Case 1: Check the returned array elements

// assertEqual(tail(["Hello", "Lighthouse", "Labs"]));
// assertEqual(tail([1, 2, 3, 4, 5]));

// Test Case: Check the original array

assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// ************ NOTE: Our assertEqual function is too simple to compare array values. JavaScript doesn't allow the use of === or == to compare two arrays.

//Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
