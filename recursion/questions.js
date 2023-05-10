/*
                    0/23
        a/3         b/3              c/3
ad/0 ae/0 af/0  bd/0 be/0 bf/0  cd/0 ce/0 cf/0

*/

function oldPhoneNumber(up, p) {
  if (up === "") {
    console.log(up);
    return;
  }

  let digit = Number(p.charAt(0));
  for (let i = (digit - 1) * 3; i < digit * 3; i++) {}
}

/* 
    suppose a dice is thrown combination to find the digit n
                    0/4
                1/3 2/2 3/1 4/0
    11/2 12/1 13/0 

*/

function diceThrown(up, target) {
  if (target === 0) {
    console.log(up);
    return;
  }
  for (let i = 1; i <= 6 && i <= target; i++) {
    diceThrown(up + i.toString(), target-i)
  }
}

console.log(diceThrown('', 4))
