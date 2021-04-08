////////// Arrays As Values (Implementation)
// const eqArrays = (a, b) => {
//   if (a.length === b.length) {
//     for (let i = 0; i < a.length; i++) {
//       if (a[i] !== b[i]) {
//         // the order of the index MUST be the same
//         return false;
//       }
//     }
//     return true;
//   }
//   return false;
// };
//////////////////////////////////assertObjectsEqual
const inspect = require("util").inspect;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

const assertObjectsEqual = function (actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed:  ${inspect(actual)} === ${inspect(expected)}`); // detailed object output to the console:
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual(ab, ba);

module.exports = assertObjectsEqual;

//////////////////////////////////assertEqual

// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed:  ${actual}  === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

//console.log(assertEqual);

//////////////////////////////////eqObjects

////////// eqObjects func below
// two objects are equal when:
//     They have the same number of keys
//     The value for each key in one object is the same as the value for that same key in the other object
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", c: "1" };

function eqObjects(object1, object2) {
  // const array1 = Object.keys(object1);
  // const array2 = Object.keys(object2);

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  const keys1 = Object.keys(object1); // returns an array of keys in the object
  const keys2 = Object.keys(object2);
  //console.log("results: ----", keys1, keys2);
  // if (!eqArrays(keys1, keys2)) {
  //   // here we compare keys of both objects
  //   return "false2"; // passing those keys through eqArrays function to testing for equality, and if not equal then false
  // }
  for (let i = 0; i < keys1.length; i++) {
    const element = keys1[i];
    if (!keys2.includes(element)) {
      // .includes checking inside keys2 if it has element | if it does not include element in the array - not just the position
      return false;
    }
  }

  //console.log("-----------answer: ", Object.keys(object1));
  for (let i = 0; i < keys1.length; i++) {
    // at this point if we iterate through keys1 or keys2, they have been identified as equal
    const element = keys1[i];
    if (object1[element] !== object2[element]) {
      // verifying the object_key then value for equality
      return false;
    }
  }
  return true;
}

//console.log("results: ---------", assertObjectsEqual(eqObjects(ab, ba)));
