let arr = [234,234,2,4234,234,56,45,23.2,45345,23,434432]

function soln1(arr){
    arr.sort((a,b)=> a - b)
    return [arr[0], arr[arr.length - 1]]
}

function soln(arr){
    let min = arr[0]
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if(min > arr[i]) min = arr[i]
        if(max < arr[i]) max = arr[i]
    }
    return [min, max]
}

console.time()
console.log(soln1(arr))
console.timeEnd()

console.time()
console.log(soln(arr))
console.timeEnd()