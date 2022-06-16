
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out “nested for loops” on Google).
// Do this Daily Challenge by youself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *


// let length = +prompt("choose a number");
let length = 10;

//using for loop.

for (let i = 0; i < length; i++) {
    let sign = '*';
    let str = sign.repeat(i) + "\n"
    // console.log(str);
}


//using nested loop

for (let i = 0; i < length; i++) {
    let sign = " ";
    for (let j = 0; j <= i; j++) {
        sign += "*";

    }
    // console.log(sign);
}


//using function.
getAsterisks(length);

function getAsterisks(length) {
    var sign = ' ';

    while (length > 0) {
        sign += '*';
        length--;
        console.log(sign);
    }

    // console.log(sign);
}















