// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file.

// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a); //5
}

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a); //5
}


//#3
function q3() {
    window.a = "hello"; 
}

function q32() {
    alert(a); //undefinde
}

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);//"test"
}

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a); //5

// Exercise 2 : Ternary Operator
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

const winBattle = () => true;
let experiencePoints;
(!winBattle) ? experiencePoints = 10 : experiencePoints = 1;
console.log(`experiencePoints`, experiencePoints);

// Exercise 3 : Is It A String ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator
// Check out the example below to see the expected output

const isString = (str) => str === !Number ? true : false;
console.log(isString(251));

// Exercise 4 : Colors
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];


const readColors = (arr) => {
    let count = 1;
    arr.forEach(val => {
        (val === 'violet') ? console.log('Yeah') : console.log('NO...');
        console.log(`${count++}# choice is ${val}`);
    });
}
readColors(colors);
// Exercise 5 : Colors #2
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

let ordinal = ["th","st","nd","rd"];
const colorRead = (arr, sign) => {
    let count = 1;
    arr.forEach(val => {
        if (count === 1) {
            console.log(`${count}${sign[count]} choice is ${val}`);
            count++;
        } else if (count === 2) {
            console.log(`${count}${sign[count]} choice is ${val}`);
            count++;
        } else if (count === 3) {
            console.log(`${count}${sign[count]} choice is ${val}`);
            count++;
        } else {
            console.log(`${count}${sign[0]} choice is ${val}`);
            count++;
        }
    });

}

colorRead(colors , ordinal);


// Exercise 6 : Bank Details
// Instructions
// In this exercise, you have to decide which type of variables you have to use (ie. let or const):
// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.

let bankAmount = 250000;
const VAT =  "* 1.17";
let details = ["+200", "-100", "+146", "+167", "-2900"];

const expense = (arr , vat) => {
    arr.forEach(val => {
        let text = val + vat;
        let res = eval(text);
        bankAmount += res;
        console.log(`bankAmount`, bankAmount);
    });
    return bankAmount;
};
expense(details, VAT);