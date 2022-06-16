let elInput = document.querySelectorAll('input');
console.log("val", elInput[0].id);
let resSpan = document.getElementById('story');

function getInputs() {

    let currValue = [];
    for (let i = 0; i < elInput.length; i++) {
        currInput = elInput[i].value;
        if (currInput.length === 0) {
            console.log(`please enter a valid data on ${elInput[i].id}`)
        } else {
            currValue.push(currInput)
            resSpan.textContent += currInput;
        }
    }
    console.log(`currValue`, currValue);
    return currValue;
}

let elBtn = document.querySelector('button');
elBtn.addEventListener('click', getInputs);

//BONUS
let elP = document.querySelector('p');
let elBtn2 = document.createElement('button');
elBtn2.textContent = "SHUFFLE!";
elP.appendChild(elBtn2);
elBtn2.addEventListener('click', shuffle);

function countClicks() {
    let count = 0;
    elBtn2.onclick = function () {
        count++;
    }
    return count;
};

function shuffle() {
    let arr = getInputs();
    let clk = countClicks();
    let shfArr = [];
    if (clk === 3) {
        return;
    } else {

        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            shfArr.push(temp);
            resSpan.textContent += temp
        }
    }
    return shfArr;
};

