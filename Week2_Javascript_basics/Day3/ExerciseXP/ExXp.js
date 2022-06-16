// Exercise 1 : List Of People
// Instructions
// let people = ["Greg", "Mary", "Devon", "James"]
// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.

// Write code to replace “James” to “Jason”.

// Write code to add your name to the end of the people array.

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this let people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

// Write code that gives the index of “Foo”. Why does it return -1 ?

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.

// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.


let people = ["Greg", "Mary", "Devon", "James"]
// 1.
people.shift();
// 2.
let rep = people.indexOf("James");
people.splice(rep, 1, "Jason");
// 3.
people.push("Adane");
// 4.
people.indexOf("Mary");
// 5.
let copyArray = people.slice(1, 3)
console.log(copyArray);
// 6.
people.indexOf("Foo");//-1 which means false/ not found.
// 7.
let last = people.pop();
console.log(last);


// patr || -Loop
// 1.
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// 2.
for (let i = 0; i < people.length; i++) {

    if (people[i] !== "Jason") {
        console.log(people[i]);
    } else {
        break;
    }
}






