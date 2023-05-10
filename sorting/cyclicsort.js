/* 
when given range from 1 to n apply cyclic sort
check if the element is the the same index as the element - 1

*/

const { swap } = require("../helper");

let arr = [1, 3, 4, 2, 2];

function soln(arr) {
  // let arr = [5, 4, 3, 2, 1];
  let i = 0;
  while (i < arr.length) {
    let correct = arr[i] - 1;
    if (arr[correct] !== arr[i]) {
      swap(arr, i, correct);
    } else {
      i++;
    }
  }
  return arr;
}

function missingNumber(arr) {
  // let arr = [0,1,3];
  let i = 0;
  while (i < arr.length) {
    let correct = arr[i];
    if (arr[i] < arr.length && arr[correct] !== arr[i]) {
      swap(arr, i, correct);
    } else {
      i++;
    }
  }

  //just iterate through arr and find missing number

  return arr;
}

function findAllDisappearingNumber(arr) {
  let i = 0;
  while (i < arr.length) {
    let correct = arr[i] - 1;
    if (arr[correct] !== arr[i]) {
      swap(arr, i, correct);
    } else {
      i++;
    }
  }

  //just iterate through arr and find missing number

  return arr;
}

function findDuplicate(arr) {
    //let arr = [3,1,2,4,2]
  let i = 0;
  while (i < arr.length) {
    let correct = arr[i] - 1;
    if (arr[i] !== i + 1) {
      if (arr[correct] !== arr[i]) {
        swap(arr, i, correct);
      }else{
        return arr[i]
      }
    } else {
      i++;
    }
  }
  return arr;
}

console.log(findDuplicate(arr));
