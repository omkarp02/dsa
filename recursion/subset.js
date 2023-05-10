/* 
use during permutation and conbination and subsets
like [3,5,9] => 3, 35, 39, 358, 59, 9, 3
*/

/*
            0/ab
        a/b     0/b
    ab/0   a/0  b/0  0/0
*/

/* 
              []
          []     [1]
      [] [1] [2]  [12]
  [] [1] [2]  [12] [2]  [12]

*/

function subsetByiteration(arr) {
  let list = [];
  list.push([]);
  let start = 0;
  let end = 0;
  for (let i = 0; i < arr.length; i++) {
    start = 0;
    if (i > 0 && arr[i] === arr[i - 1]) {
      start = end;
    }
    end = list.length;
    let n = list.length;
    for (let j = start; j < n; j++) {
      let inner = [...list[j]];
      inner.push(arr[i]);
      list.push(inner);
    }
  }
  return list;
}

function findSubsets(up, p) {
  if (p === "") {
    let list = [];
    list.push(up);
    return list;
  }
  let ch = p.charAt(0);
  let one = findSubsets(up + ch, p.substring(1));
  let two = findSubsets(up, p.substring(1));
  one = one.concat(two);
  return one;
}

console.log(subsetByiteration([1, 2, 4]));
