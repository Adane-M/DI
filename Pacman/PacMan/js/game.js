'use strict';
const WALL = '🔳';
const FOOD = '◽️';
const EMPTY = ' ';
const SUPER_FOOD = '🍒'
const POWER_FOOD = '🍩'
let isWon = true
let gBoard;
let gSuperFoodInterval;
let gCherryOnBoard = false
let gGame = {
    score: 0,
    isOn: false,
    foodCounter: 0,
};


function init() {
    gBoard = buildBoard();
    createPacman(gBoard);
    createGhosts(gBoard);
    printMat(gBoard, '.board-container');
    gGame.isOn = true;
    gSuperFoodInterval = setInterval(getPowerFood, 2000);
    
}




// update model and dom
function updateScore(diff) {
    // model
    let elScore = document.getElementById('score');
    if (!gGame.isOn) {
        gGame.score = 0;

        elScore.innerText = gGame.score;
    } else {
        gGame.score += diff;
        elScore.innerText = gGame.score;
    }
};

function gameOver(isWon) {
    let elModal = document.querySelector('.modal')
    let elH2 = document.querySelector('.modal h2')
    clearInterval(gIntervalGhosts);
    clearInterval(gSuperFoodInterval);
    gSuperFoodInterval = null;
    gIntervalGhosts = null;
    gGame.isOn = false;
    let elModalScore = document.getElementsByClassName('ttlscore')[0]; 
    elModalScore.innerText = gGame.score;
    

    if (gGame.foodCounter === 0 || isWon) {
        elModal.style.visibility = 'visible'
        elH2.innerHTML = 'VICTORIOUS'
    } else {
        elModal.style.visibility = 'visible'
        elH2.innerHTML = 'GAME OVER'
    }
};

function newGame() {
    var elGameOverModal = document.querySelector('.modal')
    elGameOverModal.style.visibility = "hidden"
    document.getElementById('score').innerText = 0;
    gGame.score = 0;
    init()
};

function SuperOn() {
    gPacman.isSuper = true
    setTimeout(superOff, 5000)
};

function superOff() {
    gPacman.isSuper = false
    reviveGhosts()
};

function getPowerFood() {
    let pos = getEmptyPos();
    console.log(pos);
    gBoard[pos.i][pos.j] = SUPER_FOOD;
    renderCell(pos, SUPER_FOOD);
    gCherryOnBoard = true
}