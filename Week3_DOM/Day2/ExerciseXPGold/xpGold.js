
// ex1 - select A Kind Of Music
// Display the value of the selected option.
let elSelect = document.getElementById('genres');
console.log(`elSelect`, elSelect.value);

// Add an additional option to the select tag:
// <option value="classic">Classic</option>
let elOpt = document.createElement('option');
elOpt.classList.add('value', 'classic')
// elOpt.textContent = "classic";
let a = document.createTextNode("classic");
elOpt.appendChild(a);
document.getElementById('genres').appendChild(elOpt);
// The newly added option should be selected by default.
elSelect[1].removeAttribute('selected', " ");
elOpt.setAttribute('selected', " ");

// ex2 - Delete Colors

let elForm = document.querySelector('form');
console.log('elform', elForm[1]);

elForm[1].addEventListener('click', removeColor);

function removeColor() {
    let selc = elForm[0];

    selc.remove(selc.selectedIndex);

}

// ex3 Create A Shopping List

let shopList = [];
let elDiv = document.getElementById('root');
let elForm1 = document.createElement('form');
elForm1.setAttribute('action', 'submit');
elDiv.appendChild(elForm1);
creatForm();
function creatForm() {
    for (let i = 0; i < 3; i++) {
        let inpo = document.createElement('input');
        let lbl = document.createElement('label');
        let br = document.createElement('br')
        inpo.setAttribute('type', 'text');
        inpo.setAttribute('name', 'text');
        lbl.setAttribute('name', 'text');
        br;
        elForm1.appendChild(inpo)
        elForm1.appendChild(lbl)

    }

}

elInput = document.querySelectorAll('input');
console.log("form",elInput);
let elBtn = document.createElement('button');
elBtn.textContent = 'Add item';
elDiv.appendChild(elBtn);
// 3.
elBtn.addEventListener('click',addItem)
function addItem() {
    
    for (let i = 0; i < elInput.length; i++) {
        currInput = elInput[i].value;
        if (currInput.length === 0) {
            console.log(`please enter a valid data on ${elInput[i].id}`)
        } else {
            shopList.push(currInput)
        }
    }
    console.log(`new shop list`, shopList);
    return shopList;
}
// 4.
let elBtn1 = document.createElement('button');
elBtn1.textContent = 'Clear all';
elDiv.appendChild(elBtn1);
// 5.
elBtn1.addEventListener('click',clearAll)

function clearAll(){
    shopList = [];
console.log("cleard",shopList);
}