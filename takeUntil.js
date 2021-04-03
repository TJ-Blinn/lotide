const takeUntil = (array, callback) => {
  // for (const [i, value] of array.entries()) if (callback(value)) return array.slice(0, i);
  // return array;

  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      result = array.slice(0, i); // 2 parameters for slice are 0=start, i =stops(retains value of the array index of what evaluates to true, stops before that element (not including last element)) | i = truthy || result is reassigned to = array.slice
      console.log(result);
      break; // this will stop the loop continuing on to another occurence
    }
  }
  return result;
};
let array = [-6, -3, -2, 1, 2, 3, 6, 8, 9];
console.log(takeUntil(array, (n) => n > 3));

/*
let index = array.findIndex(callback); // this findIndex returns the index of the 1st occurences where it evaluates to true
let resultValue = array.slice(0, index);
console.log(resultValue);
return resultValue;
*/
