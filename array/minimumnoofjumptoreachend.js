const arr = [3, 5, 3, 9, 6, 7, 6, 8, 9];

function soln(arr) {
  let jump = 0;
  let dis = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    dis = Math.max(arr[i] + i, dis);
    if (jump === i) {
      jump = dis;
      count++;
    }
  }
  return count;
}

console.log(soln(arr));
