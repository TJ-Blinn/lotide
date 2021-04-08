const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");

assertArraysEqual(middle([1, 3, 5, 7, 9, 11, 13]), [7]);
// 7
assertArraysEqual(middle([1, 2, 3, 2, 1, 5, 9, 15, 20, 21]), [1, 5]);
// 1, 5

//TEST CODE
// [1, 3, 5] = 3 / middle index of 1 | (3-1) / 2 = 1
// [1, 3, 5, 7, 9] / = 5 / middle index of 2 | (length -1) / 2 = 2

// [1, 3, 5, 7] = 3, 5 / middle index of 1,2 | (length / 2, -1) = 3
// [1, 3, 5, 7, 9, 11] = 5, 7 / middle index 2,3 | (6 / 2, -1 )

console.log("new_________", middle([1, 3, 5, 7]), [3, 5]);
