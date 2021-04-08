const assertEqual = function (actual, expected) {
  //let actual = "";
  // let expected = "";
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual}  === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/////////////////////////////findkey
// takes in an object and a callback and return the first key for which the callback returns a truthy value.

const findKey = function (object, callback) {
  const keysArray = Object.keys(object);
  for (let element of keysArray) {
    //console.log("Check this ------", element); // looping through obj1 and returning Object.keys
    if (callback(object[element])) {
      //  (ob1) => obj1.stars === 1 | Boolean value
      //console.log(element);
      return element;
    }
  }
  return undefined;
};

module.exports = findKey;

let obj1 = {
  "Blue Hill": { stars: 1 }, //
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

//console.log(findKey(bestTVShowsByGenre, "The Wire"), "drama");

assertEqual(
  findKey(obj1, (x) => x.stars === 1),
  "Ora"
);
//assertEqual(findKey(), d);
