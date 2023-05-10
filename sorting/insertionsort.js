const { swap } = require("../helper");

let arr = [5, 4, 3, 2, 1];

/*
insertion sort
find the sort chuck by chuck first sort 1 to 2 than 1 to 3 than 1 to 4 and so on
got from back side like  first compare index 2 to 1 then 3 to 1
*/

function soln(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      } else {
        break;
      }
    }
  }
  return arr;
}

console.log(soln(arr));
