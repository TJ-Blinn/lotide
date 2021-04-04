const assertEqual = function (actual, expected) {
  // assertEqual function can only compare primitive values.
  //let actual = "";
  // let expected = "";
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual}  === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

console.log(assertEqual);

//////////////////////////////////findKeyByValue.js FUNCTION
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

const findKeyByValue = function (tvValue, tvKey) {
  //Object constructor - returns the value for my object (bestTVShowsByGenre)
  const keysArray = Object.keys(tvValue);
  for (let element of keysArray) {
    if (tvValue[element] === tvKey) {
      console.log(element);
      return element;
    }
  }
  //console.log(keysArray);
  return keysArray;
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
