let arr = [-10, -1, -4, -45, -4, -5, -6];

function soln(arr) {
  let max = -999999;
  let sum = 0;
  for (let num of arr) {
    sum += num;
    if (sum > max) {
      max = sum;
    }
    if (sum <= 0) {
      sum = 0;
    }
  }
  console.log(max);
}

soln(arr);
