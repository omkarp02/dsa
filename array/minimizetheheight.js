let arr = [1, 2, 3, -2, 5];

function soln(arr, k) {
  let temp = arr.sort();
  let n = temp.length - 1;
  let diff = temp[n] - temp[0];
  let max, min;
  for (let i = 1; i < arr.length; i++) {
    if(temp[i] - k < 0) continue;
    max = Math.max(temp[n] - k, temp[i - 1] + k);
    min = Math.min(temp[0] + k, temp[i] - k);
    diff = Math.min(diff, max - min);
  }
  console.log(diff);
}

soln(arr, 3);
