// Exercise 1 : Age Difference
// Instruction
// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY


let bDay1 = 1992;
let bDay2 = 2012;
let age1 = (2022 - bDay1) * 0.5 + bDay1;
let age2 = (2022 - bDay2) * 0.5 + bDay2;
console.log("age1", age1 , "age2", age2);
var diff = (age1) - (age2);
console.log(diff);
//not workin without a function!!
if (diff % 0 ) {
    console.log("yes the older is twice as the younger "); 
}else {
    console.log("Nope the older is not twice as the younger "); 
}





// Exercise 2 : Zip Codes
// Instruction
// Harder exercise
// Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions

// While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
// Zip codes consists of 5 numbers
// Must only contain numbers
// Must not contain any whitespace (spaces)
// Must not be greater than 5 digits in length


// let zipCode = +prompt("enter your 5 digit zipcode")
let zipCode = "12 45";
let len = zipCode.length;
let inc = isNaN(zipCode);


if (len < 5) {
    console.log("Error");
} else if(inc) {
    console.log("Error");
} else {
  console.log("Success");
}



// Exercise 3 : Secret Word
// Instruction
// Harder exercise
// Hint : Use Regular Expressions

// Prompt the user for a word and save it to a variable.
// Delete all the vowels of the word and console.log the result.
// Bonus: Replace the vowels with another character and console.log the result


let str = 'heleelo world';


//remove
// let noVowels = str.slice(/[aeiouAEIOU]/gi, '');

//replace
let noVowels = str.replace(/[aeiouAEIOU]/gi, 'B');

console.log(noVowels);
