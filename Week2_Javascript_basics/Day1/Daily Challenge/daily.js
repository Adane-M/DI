// EX1

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.shift();

fruits.sort();

fruits.splice(fruits.length,0,'Kiwi')

let num = fruits.indexOf("Apples", 0)
// console.log(num);

fruits.splice(num,1)

fruits.sort().reverse();
console.log(`fruits`,fruits );

// EX2
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0]);

