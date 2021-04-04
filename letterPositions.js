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

// expected result should be an object with letters as "key" and index positions as [values]
// unction letterPositions which will return all the indices (zero-based positions) in the
// string where each character is found
let string = "lighthouse in the house";
let noSpaces = string.split(" ").join("");

function letterPositions(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence.charAt(i); // Return the first character of a string @ i
    //console.log(letter);
    if (results[letter] === undefined) {
      // Equal to. (Type Coercion)
      results[letter] = [i];
    } else {
      results[letter].push(i);
    }
  }
  console.log(results);
  return results;
}

letterPositions(noSpaces);

/// TEST CASES BELOW
const results1 = letterPositions("lighthouse in the house");
console.log(results1);

const expectedResults1 = {
  l: [0],
  i: [1, 10],
  g: [2],
  h: [3, 5, 13, 15],
  t: [4, 12],
  o: [6, 16],
  u: [7, 17],
  s: [8, 18],
  e: [9, 14, 19],
  n: [11],
};

assertArraysEqual(expectedResults1, results1); // what it should return Vs. what it is actually returning

// assertArraysEqual(letterPositions("hello").e, [1]);
