let arr = [5, 4, 3, 2, 1];
const { swap } = require("../helper/index");

/*
bubble sort mean sort bubble by bubble 
5,4,3,2,1  -> 4,5,3,2,1 -> 4,3,5,2,1 -> 4,3,2,5,1 -> 4,3,2,1,5
here the greatest element ends at end
so now sort for the rest of the array leaving the last element and so on
*/

function soln(arr) {
  let swapped = false;
  for (let i = 0; i < arr.length; i++) {
    swapped = false;
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j - 1, j);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

console.log(soln(arr));
