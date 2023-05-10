/* 
    (3,3)
(2,3)   (3,2)

*/

function pathcount(r, c) {
  if (r === 1 || c === 1) {
    return 1;
  }

  let left = soln(r, c - 1);
  let right = soln(r - 1, c);
  return left + right;
}

function printPath(p, r, c) {
  if (r === 1 && c === 1) {
    console.log(p);
    return;
  }
  if (c > 1 && r > 1) {
    printPath(p + "d", r - 1, c - 1);
  }
  if (c > 1) {
    printPath(p + "r", r, c - 1);
  }

  if (r > 1) {
    printPath(p + "d", r - 1, c);
  }
}

function mazeWithObstacles(p, flagArr, r, c) {
  if (r === flagArr.length - 1 && c === flagArr[0].length - 1) {
    console.log(p);
    return;
  }

  if(!flagArr[r][c]){
    return
  }

  if (c < flagArr[0].length - 1) {
    mazeWithObstacles(p + "r", flagArr, r, c + 1);
  }

  if (r < flagArr.length - 1) {
    mazeWithObstacles(p + "d", flagArr, r + 1, c);
  }
}

console.log(
  mazeWithObstacles(
    "",
    [
      [true, true, true],
      [true, true, true],
      [true, true, true],
    ],
    0,
    0
  )
);
