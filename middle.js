const eqArrays = function (array1, array2) {
  //loop through array1 and compare values to array 2
  for (let i = 0; i < array2.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  // simply printing out pass/fail
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed ${middle}`); // based on the assertion
  } else {
    console.log(`🛑🛑🛑 Assertion Failed ${middle}`);
  }
};

const middle2 = function (array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[Math.floor((array.length - 1) / 2)], array[Math.ceil((array.length - 1) / 2)]];
  } else {
    return [array[(array.length - 1) / 2]];
  }
};

const middle = function (array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 1) {
    const position = (array.length - 1) / 2;
    const midValue = array[position];
    return [midValue]; // return as an array
  } else {
    const firstPosition = array.length / 2 - 1; // position of 1st value
    const secondPosition = array.length / 2;
    const firstValue = array[firstPosition];
    const secondValue = array[secondPosition];
    const midValue = [firstValue, secondValue];
    return midValue;
  }
};

//TEST CODE
// [1, 3, 5] = 3 / middle index of 1 | (3-1) / 2 = 1
// [1, 3, 5, 7, 9] / = 5 / middle index of 2 | (length -1) / 2 = 2

// [1, 3, 5, 7] = 3, 5 / middle index of 1,2 | (length / 2, -1) = 3
// [1, 3, 5, 7, 9, 11] = 5, 7 / middle index 2,3 | (6 / 2, -1 )

console.log("new_________", middle([1, 3, 5, 7]));

// assertArraysEqual(eqArrays(middle([1, 3, 5, 7, 9, 11, 13]))); // 7
// assertArraysEqual(eqArrays(middle([1, 2, 3, 2, 1, 5, 9, 15, 20, 21]))); // 1, 5

/// TEST CASES BELOW
// const results1 = middle([1, 2, 3], [1]);
// console.log(`Results 1: ${results1}`);

// const expectedResults1 = [2, 3];

// assertArraysEqual(eqArrays(expectedResults1, results1));
