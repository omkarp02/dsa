let arr = [4,5,6,7,0,1,2];

function soln(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if(arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) return mid;
    else if (arr[mid] > arr[mid - 1]) start = mid + 1;
    else  end = mid - 1;
  }
  return -1;
}

console.log(soln(arr,))
