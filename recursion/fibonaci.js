let n = 5

function soln(n){
    if(n < 2){
        return n
    }
    return soln(n-2) + soln(n-1)
}

console.log(soln(n))