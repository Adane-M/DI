// Ex1

var food = "meat";
var meal = "lunch";

console.log('I eat' ,food , 'at every', meal );


// Ex2

let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

console.log('Iwatch',myWatchedSeries.length, 'series :', myWatchedSeries.toString());


// b.1
myWatchedSeries[2] = "friends";
console.log(myWatchedSeries);

// b.2
myWatchedSeries.push("Black-Panther");
console.log(myWatchedSeries);

// b.3
myWatchedSeries.unshift("Spiderman")
console.log(myWatchedSeries);
// b.4

myWatchedSeries.splice(1,1)
console.log(myWatchedSeries);

// b.5
var money = myWatchedSeries.indexOf("money heist");
var thirdLetter = myWatchedSeries[money].charAt(2);
console.log(thirdLetter);

// b.6

console.log(myWatchedSeries);


// Ex3
var cel = 28;
var fah = ((cel / 5 )* 9) + 32;

console.log(cel, "celsius is a ",fah ,"fahrenheit");


// Ex4

let c;
let a = 34;
let b = 21;
// d.1
console.log(a+b) //first expression
// Prediction:
// Actual:
console.log("Prediction : 55" , "Actual :", a+b );

// d.2
a = 2;

console.log(a+b) //second expression
// Prediction:
// Actual:
console.log("Prediction : 23" , "Actual :", a+b );
// d.3

console.log("Prediction :undefinde" , "Actual :", c );

// d.4

console.log("Prediction :string of 75" , "Actual :", 3+4+'5' );


// Ex5 

typeof(15)
// Prediction: intiger
// Actual:

typeof(5.5)
// Prediction: intiger
// Actual:

typeof(NaN)
// Prediction: false
// Actual: numnber

typeof("hello")
// Prediction:string
// Actual:

typeof(true)
// Prediction:boolian
// Actual:

typeof(1 != 2)
// Prediction:true
// Actual:

"hamburger" + "s"
// Prediction:hamburgers
// Actual:

"hamburgers" - "s"
// Prediction:undifinde
// Actual:

"1" + "3"
// Prediction:13
// Actual:

"1" - "3"
// Prediction:-2
// Actual:

"johnny" + 5
// Prediction:johnny5
// Actual:

"johnny" - 5
// Prediction:NaN
// Actual:

99 * "hello"
// Prediction:NaN
// Actual:

1 != 1
// Prediction:false
// Actual:

1 == "1"
// Prediction:false
// Actual:true

1 === "1"
// Prediction:false
// Actual:false


// Ex6

5 + "34"
// Prediction:534 string
// Actual:

5 - "4"
// Prediction:1
// Actual:

10 % 5
// Prediction:intiger
// Actual:

5 % 10
// Prediction:intiger
// Actual:

"Java" + "Script"
// Prediction:javascript
// Actual:

" " + " "
// Prediction:string
// Actual:

" " + 0
// Prediction:0 as a string
// Actual:

true + true
// Prediction:intiger
// Actual:

true + false
// Prediction:intiger
// Actual:

false + true
// Prediction:intiger
// Actual:

false - true
// Prediction:intiger
// Actual:

!true
// Prediction:false
// Actual:

3 - 4
// Prediction:-1
// Actual:

"Bob" - "bill"
// Prediction:nan
// Actual:
