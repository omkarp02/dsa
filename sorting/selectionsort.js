const { swap } = require("../helper/index");
let arr = [4, 5, 1, 2, 3];

/*
selection sort
find the index of the largest element and put it to the last 
and repeat the process
*/

function soln(arr) {
  for (let i = 0; i < arr.length; i++) {
    let last = arr.length - 1 - i;
    let maxIndex = findMaxIndex(arr, 0, last);
    swap(arr, maxIndex, last);
  }
  return arr;
}

function findMaxIndex(arr, start, last) {
  let max = start;
  for (let i = start; i <= last; i++) {
    if (arr[max] < arr[i]) {
      max = i;
    }
  }
  return max;
}

console.log(soln(arr));
