let arr = [2,5,9,6,9,3,8,9,7,1]

function soln(arr){
    let slow = arr[0]
    let fast = arr[0]
    do{
        slow = arr[slow]
        fast = arr[arr[fast]]
    }while(slow !== fast)
    slow = arr[0]
    while(slow !== fast){
        slow = arr[slow]
        fast = arr[fast]
    }
    console.log(slow, fast)
}

soln(arr)