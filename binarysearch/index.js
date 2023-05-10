let arr = [1, 2, 3, 4, 5, 6];

function soln(arr, target) {
  arr = arr.sort((a, b) => a - b);
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log((start+end)/2)
    if (target < arr[mid]) end = mid - 1;
    else if (target > arr[mid]) start = mid + 1;
    else return mid;
  }
  return 0;
}

console.log(soln(arr, 2));
