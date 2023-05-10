
let arr1 = [6, 2, 85 ]
let arr2 = [85, 25, 1, 32, 54, 6, 2]
let arr3 = [85, 2, 6]


function union2(arr1, arr2){
    const letters = new Set();
    let length = (Math.max(arr1.length, arr2.length)) - 1
    for (let i = 0; i < length; i++) {
        if(arr1[i]) letters.add(arr1[i])
        if(arr2[i]) letters.add(arr2[i])
    }
    console.log(letters)
}

function interseciton(arr1, arr2){
    const union  = new Set()
    for(let a of arr1)[
        union.add(a)
    ]
    let count = 0
    for(let a of arr2){
        if(union.has(a)){
            count++
            union.delete(a)
        }
    }
    console.log(count)
}



console.time()
interseciton(arr1, arr2)
console.timeEnd()