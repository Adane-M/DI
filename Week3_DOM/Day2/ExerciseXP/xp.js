// Using a DOM property, retrieve the h1 and console.log it.
let elH1 = document.querySelector("h1");
// elH1.forEach((h1) => {
//     console.log(h1.textContent);
// })
console.log(`elH1`, elH1.textContent);
// Using DOM methods, remove the last paragraph in the <article> tag.

let elArticle = document.querySelector('article');
elArticle.lastElementChild.remove();

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let elH2 = document.querySelector('h2');

elH2.addEventListener('click', () => elH2.style.backgroundColor = 'red');
// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let elH3 = document.querySelector('h3');
elH3.addEventListener('click', () => elH3.style.display = 'none');


// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let elBtn = document.createElement('button');
elBtn.textContent = 'Bold if you dare'
elBtn.addEventListener('click', () => elArticle.style.fontWeight = 'bold');
elArticle.appendChild(elBtn);

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
elH1.addEventListener('mouseover', () => {
    let Font = getRandomInt(0, 100) + `px`;
    elH1.style.fontSize = Font;
});


// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
let elP2 = document.getElementsByTagName('p')[1];
elP2.addEventListener('mouseover', () => {
    elP2.classList.add('fade');
});



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


// ex2
// Retrieve the form and console.log it.
let elForm = document.forms[0];
console.log("form", elForm)
// Retrieve the inputs by their id and console.log them.
let fId = elForm.elements[0].id;
let lId = elForm.elements[1].id;
console.log(`fId - ${fId}, lId - ${lId}`);
// Retrieve the inputs by their name attribute and console.log them.
let fnme = elForm.elements[0].name;
let lnme = elForm.elements[1].name;
console.log(`fId- ${fnme}, lId-  ${lnme}`);

// When the user submits the form (ie. submit event listener)
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
elForm.addEventListener('submit', getValue)

function getValue(event) {
    event.preventDfaulte();

    let fInput = event.target.elements[0].value
    let sInput = event.target.elements[0].value
    if (fInput === " " || sInput === " ") {
        alert("please enter a valid data")
    } else {
        let elLi = document.createElement("li");
        let elUl = document.querySelector("ul");
        let res = document.getElementById('result');
        res.textContent += `the user details are fname${fInput} lname${sInput}`
        elUl.appendChild(elLi);
    }
}

// ex3.
// Create a global variable named allBoldItems.
let allBoldItems = getBold_items();
// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
function getBold_items() {
    let elBold = document.querySelectorAll('strong');
    console.log(elBold);
    return elBold
}
// console.log(allBoldItems);
// Create a function called highlight() that changes the color of all the bold text to blue.
function highlight() {
    for (let i = 0; i < allBoldItems.length; i++) {

        const el = allBoldItems[i];

        el.style.color = 'blue';

    }

}
// Create a function called return_normal() that changes the color of all the bold text back to black.
function return_normal() {
    for (let i = 0; i < allBoldItems.length; i++) {

        const el = allBoldItems[i];

        el.style.color = 'black';

    }

}

// Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example
changeColorEvent();
function changeColorEvent() {

    //change color to blue
    for (let i = 0; i < allBoldItems.length; i++) {
        const el = allBoldItems[i];
        el.addEventListener('mouseover', highlight);
    }
    //return to black
    for (let i = 0; i < allBoldItems.length; i++) {
        const el = allBoldItems[i];
        el.addEventListener('mouseout', return_normal);
    }
}


// ex4.
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:

let elForm1 = document.querySelector('form');
elForm1.addEventListener('submit', getSphere);

function getSphere(event) {
    event.preventDefault();
    let userinput = new FormData(event.target);
    let radius = userinput.get('radius');
    volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById('volume').value = volume;
}


// ex5.
// Add as many events listeners as possible to one element on your webpage. Each listener should do a different thing, for instance- change position x, change position y, change color, change the font size… and more.

function changeColorEvent() {

    //change color to blue
    for (let i = 0; i < allBoldItems.length; i++) {
        const el = allBoldItems[i];
        el.addEventListener('mouseover', highlight);
        el.addEventListener('click', () => document.style.backgroundColor = 'grey')
        el.addEventListener('mouseup', () => document.style.fontWeight = 'larger')
        el.addEventListener('dbclick', () => document.style.fontSize = '25px')

    }
    //return to black
    for (let i = 0; i < allBoldItems.length; i++) {
        const el = allBoldItems[i];
        el.addEventListener('mouseout', return_normal);
    }
}

