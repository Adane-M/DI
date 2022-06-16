// # Review on Javascript
// ​
// #### Basics
// ​
// 1. How to access the second element of the array `let arr = [3, 7, 10]`
// ​arr[1]
// 2. For the code below, what does `arrNums.splice(2, 0)` return?
// ​
//     ```javascript
//     let arrNums = [1, 2, 3, 4, 5];
//     ```
// ​the same arr !!
// 3. What is the result of the following code :
// ​
//     ```javascript
//     const oneTwoThree = [1, 2, 3]
//     const sevenEightNine = [7, 8, 9]

//     const all = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];
//     console.log(all)
//     ```
// ​arr sevenEightNine will appear twice
// 4. What does the following code print to the console?
// ​
//    ```javascript
//    let golf = {
//      type: "sport",
//      clubs: {
//        high_end: "taylor made",
//        low_end: "rusty basement clubs"
//      }
//    }  
//    golf.clubs.high_end = "callaway";
//    console.log(golf.clubs.high_end);
//    ```
//callaway

// 5. Can we define the function as follows? If yes, what is it called, and explain how to invoke it.
// ​
//     ```javascript
//     const x = function(a, b){
//        return a*b;
//     }
//     ```
// it called function expression you invoke like this x(a, b)
// ​
// 6. Variables created **without** any keyword, are always global, even if they are created inside a function ? Yes or No and explain
// ​
//     ```javascript
//     function x() {
//     	a = 5;
//     }
//     ```
// ​if it is inside a scope its a local variables exept the 'var' method
// #### Functions
// ​
// 7. In JavaScript can we pass functions as arguments to other functions? What does this code return ?
// ​
//     ```javascript
// function sayHello() {
//    return "Hello, ";
// }
// function greeting(helloMessage, name) {
//   console.log(helloMessage() + name);
// }
// greeting(sayHello, "JavaScript!");

// Hello, JavaScript!

//     ```
// 8. Transform this function into an arrow function
// ​
//       ```javascript
//       function sum(num1, num2){
//           return num1 + num2
//       }

// const sum = (num1, num2) => {
//     return num1 + num2
// } 

//       sum(40,2)
//       sum(42,0)
//       console.log("the answer to everything is", sum(42,0))
//       ```
// ​
// 9. What does the following code print to the console? Explain the process and concept behind it
// ​
//      ```javascript
//      function foo () {
//        function bar() {
//          return "Poppin' bottles";
//        }
//        return bar();
//      }
//      console.log(foo());
//      ```
// ​it is a nested function it returns the inner func outcome(foo => bar)
// #### DOM
// ​
// 10. Which of the following events will you add in the `addEventListener()`method? 
//       ☐ click//yep
//       ☐ onclick
// ​
// 11. Does the `addEventListener()` method allow you to add many events to the same element?
// ​
//     ```javascript
//     x.addEventListener("mouseover", func1);
//     x.addEventListener("click", func2);
//     x.addEventListener("mouseout", func3);`
//     ```
// ​//yep
// 12. DOM exercise
// ​
//       1. Part I : Create a button in your HTML page, when the user will click the the button a paragraph will be added on the DOM with the content "New Paragraph". Use arrow functions
let btn = document.createElement('button');
btn.textContent = `CLICK TO ADD paragraph`
document.body.appendChild(btn);
btn.addEventListener('click', (newPar = () => {
    //       2. Part II : Add to each new paragraph a event listener of mouse over. When you hoover on a paragraph, it should become red
    let paragraph = document.createElement('p');
    paragraph.textContent = "New Paragraph";
    document.body.appendChild(paragraph);
    paragraph.addEventListener('mouseover', () => {
        paragraph.style.color = 'red'
    })
})
)
// ​
// #### Array Methods
// ​
// 14. What is the value of `passed` in the following code?
// ​
//      ```javascript
//  let marks = [67, 60, 89, 90, 67, 42];

//  let passed = marks.every(function(m) {
//     return m >= 50;
//  });
//it will be false.      ```
// ​
// 15. What does the following code log?
// ​
//    ```javascript
//    let nums = [10, 50, 88];

//    let bignums = nums.filter(function(n) {
//       return n > 10;
//    });

//    console.log(bignums);
// [88,50]
//    ```
// ​
// 16. Use a javascript array method to square the value of every element in the array. 
// ​
//    ```javascript
//    const input = [ 1, 2, 3, 4, 5 ];
//code
//    console.log(input) // [ 1, 4, 9, 16, 25]
// let square = input.map(num =>  num ** 2);
// console.log(square)

//    ```
// ​
// 16. Use 2 javascript array methods and chain them to return the sum of all the positives ones. 
// ​
// //      ```javascript
//      const secondInput = [ 1, -4, 12, 0, -3, 29, -150];
// //      //code
// let total = 0;
// let positives = secondInput.map(num =>  {
//     // let sum = 0;
//     if(num > 0){
//         total += num

//     }
// });

//  console.log(total) //42
//      ```
// ​
// 17. Use 3 javascript methods and chain them to abbreviate the name and return the name initials.
// ​
//      ```javascript
//      const input = 'George Raymond Richard Martin';
// let arr = input.split(' ');
// let initials = ''
// let arr1 = arr.map(char => {
//     initials += char[0];
// })
// //      //code 
//      console.log(initials)//'GRRM'
//      ```
// ​
// #### Object and Classes
// ​
// 18. How the objects are passed in JavaScript? By Value or By Reference ? Explain with an example
// ​
// 19. What will be printed in the console
// ​
// //     ```javascript
// function Item(name, price) {
//     this.name = name;
//     this.price = price;
//     this.displayInfo = function () {
//         console.log(this.name + " is for $ " + this.price)
//     }
// };
// const cake = new Item("Chocolate Cake", 10);
// cake.displayInfo();

//"choclate is for $10"     ```
// ​
// 20. Refactor this code using Classes
// class Item {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//         this.displayInfo = function () {
//             console.log(this.name + " is for $ " + this.price);
//         };
//     }
// };

// const cake = new Item("Chocolate Cake", 10);
// cake.displayInfo();
// #### Promises
// ​
// 21. What will be the output and why ? What will be the state of the promise ?
// ​
//     ```javascript
// Promise.resolve('Success!')
//   .then(data => {
//     return data.toUpperCase()
//   })
//   .then(data => {
//     console.log(data)
//   })
//   SUCCESS in an upper case
//     ```
// ​
// 22. What log will be made by the following code, after 2 seconds?
// ​
//     ```javascript
// const p = new Promise(function(resolve, reject) {
//    setTimeout(function() {
//       resolve("OK");
//    }, 2000);
// });

// p.then().then(function(data) {
//    console.log(data); // 
// });
//it will log the resolve
//     ```
// ​
// 23. Consider the following async function and its output. What will be displayed to the console when calling the `f()` function? Explain the process
// ​
//     ```javascript
// async function f() {
//   let result = 'first!';
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('done!'), 1000);
//   });

//   result = await promise;

//   console.log(result);
// }

// f();
// the async func will wait for the prmise to resolve/reject and then it wil execute the outcome
//     ```
// ​
// 24. Use async await, and fetch to a fact on cats and display it `https://catfact.ninja/fact`. 
//     1. Create 2 functions : on to fetch data from API, the other one to display it on the page using the DOM
//     2. Make sure to use try and catch

// fetchUrl();
// async function fetchUrl() {
//     try {
//         let url = await fetch("https://catfact.ninja/fact")
//         let cat = await url.json();
// console.log(`cat`, cat);
//         displayCat(cat);
//     } catch (error) {
//         console.log('ooops', error);
//     }

// }

// function displayCat(cat){
//     let catFact = document.createElement('p');
//     catFact.textContent = `CAT fact : ${cat['fact']}`
//     document.body.appendChild(catFact);
// }

// // let url = fetch("https://catfact.ninja/fact")
// //     .then(url => url.json())
// //     .then(data => {
// //         let catFact = document.createElement('p');
// //         catFact.textContent = `CAT fact : ${data['fact']}`
// //         document.body.appendChild(catFact);
// //     })

