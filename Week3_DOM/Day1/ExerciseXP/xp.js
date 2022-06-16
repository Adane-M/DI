
// // 1.Change The Navbar
let elDiv = document.getElementById("navBar");
elDiv.setAttribute("id","socialNetworkNavigation");
// // 2.

let elUl = document.querySelector("ul");
let elLi = document.createElement("li");
elLi.classList.add = ("newLi");
elLi.innerText = "Logout";
elUl.appendChild(elLi);

// // 3.bonus
let fLi = elUl.firstElementChild.textContent;
let lLi = elUl.lastElementChild.textContent;

console.log(`first li:${fLi} , last li ${lLi}`);

// ex2. users
// 1.
let elUl1 = document.querySelector(".list");
elUl1.lastElementChild.innerText = "Richard";
console.log(elUl1.innerText);
// 2.
let elUl2 = document.querySelectorAll(".list");

elUl2.forEach((fLi)=> fLi.firstElementChild.innerText = "Adane")

// // 3.
let elUl3 = document.querySelectorAll(".list");
elUl3.forEach((lLi)=> {
let elLi3 = document.createElement("li");
elLi3.classList.add = ("newLi");
elLi3.innerText = "Hey students";
lLi.appendChild(elLi3);
})

// // 4.
let elUl4  = document.querySelectorAll(".list");
elUl4[1].removeChild(elUl4[1].children[1]);

// 5.bonus
let elUl5  = document.querySelectorAll(".list");

for (let i = 0; i < elUl5.length; i++) {
    const ul5 = elUl5[i];
    if(i === 0){
        ul5.classList.add("university","attendance");
    }
    ul5.classList.add("students_list");
    
};

//Exercise 3 : Users And Style
// 1.
let elDiv3 = document.querySelector("div");
let isBlue =( elDiv3.style.backgroundColor = "lightblue");
elDiv3.style.padding = "10px";
// 2.
let elUL7 = document.querySelector(".list");
elUL7.firstElementChild.style.display = "none";

// 3.
elUL7.lastElementChild.style.border = "5px solid black";

// 4.
let elBody = document.body;
elBody.style.fontSize = "50px";

// 5.Bonus
// isBlue = true
if(isBlue) {
    alert(`hello ${elUL7.firstElementChild.textContent} & ${elUL7.lastElementChild.textContent}`);
}