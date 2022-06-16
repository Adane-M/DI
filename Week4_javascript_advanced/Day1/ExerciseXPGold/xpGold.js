// Exercise 1: Sum Elements
// Instructions
// Write a JavaScript program to find the sum of all elements in an array.

const sumArr = (arr) => {
    let sum = 0;
    arr.forEach(element => {
        sum += element
    });
    return sum;
}

// Exercise 2 : Remove Duplicates
// Instructions
// Write a JavaScript program to remove duplicate items in an array.
const removeDuplicate = (arr) => {
    let unicArr = [];
    arr.forEach(val => {
        unicArr.indexOf(val) ? unicArr.push(val): `this parm allready exist ${val}`;
    });
    console.log(`unicArr`, unicArr);
}
let asds = ['asdf','fgdhf', 'kjnk','asdf'];
removeDuplicate(asds);

// Exercise 3 : Remove Certain Values
// Instructions
// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]
let example = [NaN, 0, 15, false, -22, '',undefined, 47, null]
const removeNan = (arr) => {
    let numArr = []
    arr.forEach(val =>{
        if(isNaN(val) || val === 0 || val === '' || val === false || val === undefined || val === null){
         console.log(`this value is not good`, val);   
        } else {
            numArr.push(val)
        } 
    });
    console.log(`numArr`, numArr);
}
removeNan(example);

// Exercise 4 : Repeat Please !
// Instructions
// Write a JavaScript function to concatenate a given string n times (default is 1).
// Create the repeat function yourself:
// console.log(repeat('Ha!',3));
// "Ha!Ha!Ha!"
reapetVal('Hi!' , 2);

function reapetVal(val , num){
    while (num > 0) {
        val += val;
        num--;
    }
    
    console.log(`val`, val);
}

// ex5

const startLine = '     ||<- Start line';
let turtle = '        🐢';
let rabbit = '        🐇';

// When you write:

console.log(startLine);
console.log(turtle);
console.log(rabbit);

// It should look like this:

// '     ||<- Start line'
// '       🐢'
// '       🐇'
// What happens when you run 
turtle = turtle.trim().padEnd(9, '='); //turtle gets 9steps ahead.

console.log(startLine);
console.log(turtle);
console.log(rabbit);
