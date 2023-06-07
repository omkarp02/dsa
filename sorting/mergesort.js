function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  let mid = arr.length / 2;

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid, arr.length));
  return merge(left, right);
}

function merge(first, second) {
  let i = 0;
  let j = 0;
  let newArr = [];
  while (i < first.length && j < second.length) {
    if (first[i] < second[j]) {
      newArr.push(first[i]);
      i++;
    } else {
      newArr.push(second[j]);
      j++;
    }
  }

  while (i < first.length) {
    newArr.push(first[i]);
    i++;
  }
  while (j < second.length) {
    newArr.push(second[j]);
    j++;
  }
  return newArr;
}

console.log(mergeSort([1, 2, 3, 4, 5]));
