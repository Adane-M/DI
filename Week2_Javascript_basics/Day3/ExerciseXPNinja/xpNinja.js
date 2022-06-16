// ex1
// Exercise 1 : Checking The BMI
// Instructions
// Hint:
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// Create two objects, each object should hold a person’s details. Here are the details:
// FullName
// Mass
// Height

// Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person

// Outside of the objects, create a JS function that compares the BMI of both objects.

// Display the name of the person who has the largest BMI.

let peter = {
    FullName: "peter griffin",
    Mass: 250,
    Height: 6.2,
    Bmi:
        function bmiCalc() {
            const BMI = 250 / (6.2) * 2;
            return BMI
        },
}

let lois = {
    FullName: "lois griffin",
    Mass: 250,
    Height: 5.7,
    Bmi:
        function bmiCalc() {
            const BMI = 850 / (9.7) * 2;
            return BMI
        }
}

function bmiCalc(Mass, Height) {
    const BMI = Mass / Height * 2;
}

let bmiB = lois.Bmi();
let bmiA = peter.Bmi();
biggerBmi();

function biggerBmi() {
    if (bmiB < bmiA) {
        console.log(`${peter.FullName} have the largest BMI :${bmiA}`);
    } else {
        console.log(`${lois.FullName} have the largest BMI :${bmiB}`);
    }
}


// ex2
// Exercise 2 : Grade Average
// Instructions
// Hint:
// - This Exercise is trickier then the others. You have to think about its structure before you start coding.
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

// Create a function called findAvg(gradesList) that takes an argument called gradesList.

// Your function must calculate and console.log the average.

// If the average is above 65 let the user know they passed

// If the average is below 65 let the user know they failed and must repeat the course.
// Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
// Hint One function must call the other.

let gradesList = [90, 60, 75, 95, 55, 80]

//one function


// function findAvg(array) {
//     let sum = 0;
//     let avg = (sum / array.length);

//     for (let i = 0; i < array.length; i++) {
//         let currGrade = array[i];
//         sum += currGrade;
//     }
//     console.log(avg);
//     if (avg > 65) {
//         console.log(`congrats you got ${avg} score 😎`);
//     } else {
//         console.log(`😥 you got only ${avg} score, please repeat the course`);

//     }

// }

//tow functions

findAvg(gradesList);

function findAvg(array) {
    let sum = 0;
    let avg = (sum / array.length);

    for (let i = 0; i < array.length; i++) {
        let currGrade = array[i];
        sum += currGrade;
    }
    
    passOrFuzz(avg);
}

function passOrFuzz(avrage) {

    if (avrage > 65) {
        console.log(`congrats you got ${avrage} score 😎`);
    } else {
        console.log(`😥 you got only ${avrage} score, please repeat the course`);

    }


}