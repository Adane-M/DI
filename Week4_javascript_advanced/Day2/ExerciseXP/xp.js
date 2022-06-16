// Exercise 1 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const sum = (a, b) => (a + b);
console.log(`sum`, sum(3, 5));

// Exercise 2 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
// First, use function declaration and invoke it.
// kToG(3);
(function kToG(n) {
    console.log(`function declaration ${n * 1000}`);
})(3);
// Then, use function expression and invoke it.
const kgTGr = function (n) {
    console.log(`function expression ${n * 1000}`);
    // return n * 1000;
}
kgTGr(3);
// Write in a one line comment, the difference between function declaration and function expression.
//// ANS: function expression are not hoisted unlike function declarations
// Finally, use a one line arrow function and invoke it.
const kgToGr = (a) => (a * 1000);
console.log(`arrow function kgToGr 3kg is: ${kgToGr(3)} grams`);


// Exercise 3 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

let elH2 = document.createElement('h2');
let elBody = document.querySelector('body');
elBody.appendChild(elH2);
elH2 = document.querySelector('h2');
(function (numberOfChildren, partnersName, geographicLocation, jobTitle) {
    elH2.textContent = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids`
})(3, 'Ilana', 'Ashqelon', 'Developer');


// Exercise 4 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.
// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture

let elNav = document.querySelector('nav');
let strHTML = ` `;
(function (name) {
    let elDiv = document.createElement('div');
    elNav.appendChild(elDiv);
    strHTML += `hello: ${name} <img style="height: 40px;" src="https://image.similarpng.com/very-thumbnail/2020/07/Emoji-is-amazed-on-transparent-background-PNG.png" alt="smily">`
    elDiv.innerHTML = strHTML;
})('Emoji')



// Exercise 5 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.
let elDiv2 = document.createElement('div');
elBody.appendChild(elDiv2);

makeJuice('large');
function makeJuice(size) {
    // let size = ['small', 'medium', 'large'];
    if (size === 'small' || size === 'medium' || size === 'large') {
        // return size;
        return addIngredients('suger', 'water', 'yogurt');
    } else {
        return undefined;
    }
    function addIngredients(ingredient1, ingredient2, ingredient3) {
       let strHTML = ``;
        strHTML += `EX5P1: The client wants a ${size} 
        juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}`
        elDiv2.innerHTML = strHTML;
    }
}

// Part II:
// In the makeJuice function, create an empty array named ingredients.
// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.
let elDiv3 = document.querySelector('.ex5p2')
makeJuice2('large');
function makeJuice2(size) {
    let ingredients = [];
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3)
    }
    function displayJuice() {
        let newP = document.createElement("p");
 newP.textContent = `EX5P2: The client wants a ${size} juice, containing : `
        ingredients.forEach((element) => {
            let text = document.createTextNode(`${element} ,`);
            newP.appendChild(text);
        });
        elDiv3.appendChild(newP);
    }

    addIngredients('suger', 'water', 'yogurt');
    addIngredients('apple', 'watermelon', 'banana');
    displayJuice();
}