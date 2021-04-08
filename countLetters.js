////////////////// TESTING FUNCTION BELOW
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

//assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
//assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1, 5]), false); // => should FAIL

////////////// countLetters function below

const countLetters = function (allItems) {
  let results = {};

  for (const item of allItems) {
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  //console.log(item);
  return results;
};

console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;

/// TEST CASES BELOW
const results1 = countLetters("lighthouse in the house");
console.log(results1);

const expectedResults1 = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, " ": 3, n: 1 };

assertArraysEqual(expectedResults1, results1); // what it should return Vs. what it is actually returning

//countLetters("lighthouse in the house");
//console.log(results);
//const result1 = countLetters(letters);

// assertEqual(result1["l"], 1);
// assertEqual(result1["i"], 2);
// assertEqual(result1["g"], 1);
// assertEqual(result1["h"], 4);
// assertEqual(result1["t"], 2);
// assertEqual(result1["o"], 2);
// assertEqual(result1["u"], 2);
// assertEqual(result1["s"], 2);
// assertEqual(result1["e"], 3);
// assertEqual(result1["n"], 1);

/* psuedoCode
1. Create an empty object.
2. For each letter in the text 
    2a. If the letter is not a property of the object then add it with value=1
    2b. If the letter is already a property of the object increment the count
3. Return the object containing the letters and their frequencies
*/
