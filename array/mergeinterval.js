let arr = [
  [1, 3],
  [8, 10],
  [15, 18],
  [2, 6],
];

function soln(arr) {
  const tempArr = arr.sort((a, b) => a[0] - b[0]);
  const result = [];
  let start = tempArr[0][0]
  let end = tempArr[0][1]
  for (let i = 0; i < tempArr.length; i++) {
    if( tempArr[i][0] <= end){
        end = Math.max(end, tempArr[i][1])
    }else{
        result.push([start, end])
        end = tempArr[i][1]
        start = tempArr[i][0]
    }
  }
  result.push([start, end])
  return result
}

console.log(soln(arr))
