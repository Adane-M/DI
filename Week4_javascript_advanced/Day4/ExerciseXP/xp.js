// Exercise 1 : Location
// Instructions
// Analyze the code below. What will be the output?

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const { name, location: { country, city, coordinates: [lat, lng] } } = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
//it will console log everything(all values) exept the age value!

// Exercise 2: Display Student Info
// Instructions
// Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
// For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).
// Destructure the parameter inside the function and return a string as the example seen below:
displayStudentInfo({ first: 'Elie', last: 'Schoppik' });
// output : 'Your full name is Elie Schoppik'`

function displayStudentInfo(studentObject) {

    let { first: first, last: last } = studentObject;
    console.log(`Your full name is : ${first} ${last}`);

}

// Exercise 3: User & Id
// Instructions
// Using this object 
const users = { user1: 18273, user2: 92833, user3: 90315 }
// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.
const keyValArr = Object.entries(users);
console.log(`keyValArr`, keyValArr);
// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

modifyObj();
function modifyObj() {

    keyValArr.forEach(element => {
        element[1] *= 2;
        return keyValArr
    });

    console.log(`keyValArr`, keyValArr);
}

// Exercise 4 : Person Class
// Instructions
// Analyze the code below. What will be the output?
class Person {
    constructor(name) {
        this.name = name;
    }
}

const member = new Person('John');
console.log(typeof member); // object object


// Exercise 5 : Dog Class
// Instructions
// Using the Dog class below:

class Dog {
    constructor(name) {
        this.name = name;
    }
};
// Analyze the options below. Which constructor will successfully extend the Dog class?

//ANS:
// 2
class Labrador extends Dog {
    constructor(name, size) {
        super(name);
        this.size = size;
    }
};

//   Exercise 6 : Challenges
// 1.Evaluate these (ie True or False)

// [2] === [2]  // false eveery array have their own addres 
// {} === {}   // false same here.

//2. What is, for each object below, the value of the property number ?

const object1 = { number: 5 }; //5 
const object2 = object1;  //5
const object3 = object2;  //5
const object4 = { number: 5 }; // 5 
object1.number = 4; // 4 its redifined.


let animalSound = new Audio('sound/ehOh.mp3');
// Create a class Animal with the attributes name, type and color

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }


}

// Create a class Mamal that extends from the Animal class. It has a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

class Mamal extends Animal {
    constructor(name, type, color) {
        super(name, type, color)
    }

    sound(voice = 'eh oh') {
        animalSound.play();
        return `${voice} is the  voice that i make , hi i'm ${this.name}a type of ${this.type} my color is ${this.color}`
    }
} 
// Create a cow object that accepts a name, a type and a color and calls the sound method that moo’s her name, type and color.


const tinkyWinky = new Mamal('Tinky Winky','teletubbies','green');
console.log(tinkyWinky.sound('mooo'));
