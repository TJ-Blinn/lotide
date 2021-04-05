const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual}  === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
//console.log(assertEqual);

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

const without = function (arr, arrToRemove) {
  const result = [];

  //console.log("new", arr.length);
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    //console.log("random", element);
    if (!arrToRemove.includes(element)) {
      // check if 2ns array if it includes the element - NOT included
      result.push(element);
    }
  }
  return result;
};

const withoutResult = without([1, 2, 3], [1]);
console.log("without Results", withoutResult);
//console.log(assertEqual(withoutResult, [2, 3])); // withoutResult now = actual parameter passed into assertEqual
console.log(eqArrays(withoutResult, [2, 3]));

//console.log(assertEqual(without([1, 2, 3], [1]), [ 2, 3 ]));
//console.log(without(["1", "2", "3"], [1, 2, "3"]));

/// TEST CASES BELOW
// const results1 = without([1, 2, 3], [1]);
// console.log(`Results 1: ${results1}`);

// const expectedResults1 = [2, 3];

// assertEqual(expectedResults1, results1);

/////////TESTING

// without([1, 2, 3], [1]); // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

/////////TESTING to not modify the original array
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
