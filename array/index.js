const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function soln(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    swap(arr, start, end);
    start++;
    end--;
  }
  return arr;
}

function swap(arr, num1, num2) {
  let temp = arr[num1];
  arr[num1] = arr[num2];
  arr[num2] = temp;
}

console.log(soln(arr));
