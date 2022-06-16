// let computerNumber = getRandomIntInclusive(0, 10);

let computerNumber = getRandomIntInclusive(0, 10);
let count = 0;

function playTheGame() {
    let isStart = confirm("would you like to play");

    if (!isStart) {
        alert("No problem, Goodbye")
    } else {
        computerNumber = getRandomIntInclusive(0, 10);
        chooseNum();
    }

}


function chooseNum() {

    let isNum = +prompt("enter a num 0-10");

    if (isNaN(isNum) || isNum === " ") {
        alert("Sorry Not a number, Goodbye");

    } else if (isNum > 10 || isNum < 0) {
        alert("Sorry it's Not a good number, Goodbye");

    } else {

        test(isNum, computerNumber);
    }
}


function test(userNumber, computerNumber) {
    console.log(userNumber, "userNumber < computerNumber", computerNumber);

    if (userNumber === computerNumber) {
        console.log("WINNER");
        alert("WINNER");
        count++;
        console.log("count", count);
        if (count === 3) {
            alert("Good Job, You Won!!!")
            count = 0;
            return;
        } else {
            computerNumber = getRandomIntInclusive(0, 10);
            playTheGame();
        }
    } else if (userNumber < computerNumber) {
        alert("Your number is smaller then the computer's, guess again");
        chooseNum();

    } else if (userNumber > computerNumber) {
        alert("Your number is bigger then the computer's, guess again");
        chooseNum();
    }
}














function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
