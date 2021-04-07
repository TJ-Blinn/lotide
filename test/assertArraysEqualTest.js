const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1, 5]), false); // => should FAIL
