// Ex1
//Evaluate the comparisons found below:

5 >= 1 // true 5 bigger but not equel
0 === 1 // false 1 bigger
4 <= 1 // false 4 is bigger
1 != 1 // false they are equel
"A" > "B"  //false
"B" < "C"  //true
"a" > "A"  //true
"b" < "A"  //true
true === false // false
true != true  // false


// EX2

// let num = prompt("choose 4 numbers i.e 6,8,3,7");
// // let joinNums = num.splice(',');

// console.log(joinNums);



// Ex3

// let findWord = prompt("write a sntence that includes the word'nemo' ");
// var sepWord = findWord.split(' ');
// var res = sepWord.includes('nemo');
// if (res) {
    // console.log(`i found nemo at ${sepWord.indexOf('nemo')}`);
    
// } else {
    // console.log(`I can't find nemo`);
// }

// EX4

let num = 10
var res = 'o';
if(num < 2) {
    console.log('boom');
} else if (num > 2 ) {
    console.log(`b${res.repeat(num)}m `);
    
}else if (num % 2 && num > 2){
    console.log(`b${res.repeat(num)}m !`);
} else if (num % 5) {
    console.log(`B${res.repeat(num)}M `);  
} else if (num % 2 && num % 5) {
    console.log(`B${res.repeat(num)}M !`);
}