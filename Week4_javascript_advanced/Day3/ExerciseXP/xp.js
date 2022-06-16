// Exercise 1 : Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result); // creats new array with 6 vals.

// ------2------
const country = "USA";
console.log([...country]);//creat array from every letter of the string

// ------Bonus------
let newArray = [...[, ,]];
console.log(newArray); //creat an empty array.with to empty vals.

// Exercise 2 : Employees
// Instructions
// Using this array:
let users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];

// Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)

users.map((fName) => {
    console.log(`Hello ${fName.firstName}`);
});
// Using the filter() method, create a new array, containing only the Full Stack Residents.

let res = users.filter(rule => rule['role'] === 'Full Stack Resident'

);
console.log(`res`, res);
// Bonus : Chain the filter method with a map method, to congratulate the Full Stack Residents (ie. “Good job Bradley”, “Good Job Chloe” ect…)

let res1 = users.filter(rule => rule['role'] === 'Full Stack Resident'
)
res1.map((fName) => {
    console.log(`Good job ${fName.firstName}`);
});

// Exercise 3 : Star Wars
// Instructions
// Using this array let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// 1. Use the reduce() method to combine all of these into a single string.

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
let str = '';
let res2 = epic.reduce((prevStr, currStr) => `${prevStr} ${currStr}`, str);
console.log(`res2`, res2);


// Exercise 4 : Employees #2
let student = [
    { name: "Ray", course: "Computer Science", isPassed: true },
    { name: "Liam", course: "Computer Science", isPassed: false },
    { name: "Jenner", course: "Information Technology", isPassed: true },
    { name: "Marco", course: "Robotics", isPassed: true },
    { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
    { name: "Jamie", course: "Big Data", isPassed: false }
];
 //    Using the filter() method, create a new array, containing the students that passed the course.
 //    Bonus : Chain the filter method with a map method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)
let res3 = student.filter(pass => pass.isPassed === true);
console.log(`res3`, res3);
res3.map((fName) => {
console.log(`Good job ${fName['name']} you passed the course in ${fName['course']}`);
});