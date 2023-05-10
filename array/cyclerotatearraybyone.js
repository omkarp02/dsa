let arr = [1, 2, 3, 4, 5, 6];
let arr2 = [1, 2, 3, 4, 5, 6];

function soln(arr, k) {
  let temp = [...arr];
  for (let i = 0; i < arr.length; i++) {
    temp[(i + k) % arr.length] = arr[i];
  }
  arr = temp;
  console.log(arr);
}

function soln2(arr, k){
    for (let i = 0; i < k; i++) {
        let val = arr.pop()
        arr.unshift(val)
    }
    console.log(arr)
}

console.time()
soln(arr, 3);
console.timeEnd()

console.time()
soln2(arr2, 3);
console.timeEnd()
