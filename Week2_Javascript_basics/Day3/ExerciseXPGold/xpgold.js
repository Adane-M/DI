// ex1
// Loop through the array above and determine whether or not each number is divisible by three.
// Each time you loop console.log true or false.


let numbers = [123, 8409, 100053, 333333333, 7]

for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];

    if (num % 3 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

// ex2
// Given the object above where the key is the student’s name and the value is the country they are from.

// Prompt the student for their name.

// If the name is in the object, console.log the name of the student and the country they come from.
// For example: "Hi! I'm [name], and I'm from [country]."
// Hint: You don’t need to use a for loop, just look up the statement if ... in

// If the name is not in the object, console.log: "Hi! I'm a guest."


let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
}

let nameOf = prompt("Enter your name");

if (nameOf in guestList) {
    console.log(`Hi! Im ${nameOf}, and I'm from ${guestList[nameOf]}`);
} else {
    console.log("would you like to Signup?");
}


// ex3
// Requirements : Don’t use built-in Javascript methods to answer the following questions. You have to create the logic by yourself. Use simple for loops.


// 1. Console.log the sum of all the numbers in the age array.
// 2. Console.log the highest age in the array.

let age = [20, 5, 12, 43, 98, 55];

// 1.

let sum = 0;
for (let i = 0; i < age.length; i++) {
    sum += age[i];
}
console.log(`the sum is : ${sum}`);

// 2.
let biggerNum = 0;
for (let i = 0; i < age.length; i++) {
    let currNum = age[i];
    if (biggerNum < currNum) {
        biggerNum = currNum;
    }
}
console.log("the highest age is:",biggerNum);









