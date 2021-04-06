//////////////////// TESTING FUNCTION BELOW
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

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
console.log(assertEqual);

/////////////////////COUNT ONLY FUNC BELOW

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    // inside the loop,
    // increment the counter for each item:
    //   set a property with that string key to:
    //     the value that was already there (or zero if nothing there) with 1 added to it.

    //// this if statement will count everything.
    // if (results[item]) {
    //   results[item] += 1;
    // } else {
    //   results[item] = 1;
    // }
    // console.log(item);

    if (itemsToCount[item]) {
      // if condition to only increment our count in results if the item is found in the itemsToCount object.
      if (results[item]) {
        //console.log(item);
        results[item] += 1;
        //console.log(results);
      } else {
        results[item] = 1;
      }
    }
  }
  //console.log(results);
  return results;
};
const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];

const result1 = countOnly(firstNames, { Jason: true, Karima: true, Fang: true, Agouhanna: false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
