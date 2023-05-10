/* 
                0/abc
                a/bc
            ba/c    ab/c
cba/0   bca/0   bac/0   cab/0 acb/0 abc/0

*/

let count = 0
function permution(up ,p){
    if(p === ''){
        let list = []
        list.push(up)
        count ++
        return list;
    }
    let ans = []
    for (let i = 0; i < up.length + 1; i++) {
        let ch = p.charAt(0)
        let a = up.slice(0, i) + ch + up.slice(i)
        ans.push(...(permution(a, p.substring(1))))
    }
    return ans
}

console.log(permution('', 'abc'), count)