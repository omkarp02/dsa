function allPath(p, flagArr, r, c) {
  if (r === flagArr.length - 1 && c === flagArr[0].length - 1) {
    console.log(p);
    return;
  }

  if (!flagArr[r][c]) {
    return;
  }

  flagArr[r][c] = false;

  if (c < flagArr[0].length - 1) {
    allPath(p + "r", flagArr, r, c + 1)
  }

  if (r < flagArr.length - 1) {
    allPath(p + "d", flagArr, r + 1, c);
  }

  if (r > 0) {
    allPath(p + "u", flagArr, r - 1, c);
  }

  if (c > 0) {
    allPath(p + "u", flagArr, r, c - 1);
  }

  flagArr[r][c] = true;
}

console.log(
  allPath(
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
