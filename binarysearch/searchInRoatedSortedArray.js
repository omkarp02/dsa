const arr = [4, 5, 6, 7, 0, 1, 2];

function soln(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[0]) start = mid;
    else end = mid - 1;
  }
  return [start, end];
}

console.log(soln(arr));
