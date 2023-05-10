let arr = [2,3,5,9,14,16,,18];

function soln(arr, target) {
  arr = arr.sort((a, b) => a - b);
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target < arr[mid]) end = mid - 1;
    else if (target > arr[mid]) start = mid + 1;
  }
  return start;
}

console.log(soln(arr, 15));