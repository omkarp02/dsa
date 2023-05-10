function printTillN(n) {
  if (n === 0) {
    return;
  }

  printTillN(n - 1);
  console.log(n);
}

function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

function sumOfDigits(n) {
  if (n === 0) return 0;
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

let sum = 0;
function reverseADigit(n) {
  if (n === 0) return;
  let rem = n % 10;
  sum = sum * 10 + rem;
  reverseADigit(Math.floor(n / 10));
}

function arrSortedOrNot(arr) {
  if (arr.length === 1) {
    return true;
  }
  return arr[0] < arr[1] && arrSortedOrNot(arr.slice(1, arr.length));
}

let skip = "a";

function skipACharacter(str) {
  if (str === "") {
    return "";
  }

  let chr = str.charAt(0);

  if (chr === skip) {
    return skipACharacter(str.slice(1));
  } else {
    return chr + skipACharacter(str.slice(1));
  }
}

// console.log(arrSortedOrNot([1, 2, 7, 14, 15]));
let str = "baccad";
console.log(skipACharacter(str, ""));
