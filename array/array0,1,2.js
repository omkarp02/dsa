let arr = [0, 1, 0, 2, 1, 0, 2, 1, 0, 2, 1, 0, 1, 2, 0];

//this problem does not work with if statement

function soln(arr) {
  let s = 0;
  let m = 0;
  let e = arr.length - 1;
  while (m <= e) {
    switch (arr[m]) {
      case 0:
        swap(arr, m, s);
        s++
        m++
        break;
      case 1:
        m++
        break;
      case 2:
        swap(arr, e, m)
        e--
    }
  }

  return arr;
}

function swap(arr, num1, num2) {
  let temp = arr[num1];
  arr[num1] = arr[num2];
  arr[num2] = temp;
}

console.log(soln(arr));
