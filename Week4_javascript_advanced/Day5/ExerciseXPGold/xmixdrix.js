'use strict';

var gBoard;
var gIsUserMove;


init();

function init() {
    gBoard = createBoard(3);
    console.table(gBoard);
    gIsUserMove = (Math.random() > 0.5);
    playGame();
};

function playGame() {
    var isGameOn = true;
    var movesCount = 0;
    var cellCount = gBoard.length ** 2;
    while (isGameOn) {
        var pos = playMove();
        console.table(gBoard);
        var isVictory = checkIsVictory(pos);
        movesCount++;
        if (isVictory) {
            console.log('Victory! did you win?', gIsUserMove);
            isGameOn = false;
        } else if (movesCount === cellCount) {
            console.log('Tie');
            isGameOn = false;
        }
        gIsUserMove = !gIsUserMove;
    }
};

function playMove() {
    var pos = gIsUserMove ? playUserMove() : playComputerMove();
    return pos;
};

function checkIsVictory(pos) {
    var symbol = gIsUserMove ? '❌' : '⭕️';
    var length = gBoard.length;

    var count = getCountRow(gBoard[pos.i], symbol);
    if (count === length) return true;

    var count = getCountCol(pos.j, symbol);
    if (count === length) return true;

    var count = getCountPrimaryDiagonal(symbol);
    if (count === length) return true;

    var count = getCountSecondaryDiagonal(symbol);
    if (count === length) return true;

    return false;
};

function getCountSecondaryDiagonal(symbol) {
    var count = 0;
    for (var i = 0; i < gBoard.length; i++) {
        var currCell = gBoard[i][gBoard.length - i - 1];
        if (currCell === symbol) count++;
    }
    return count;
}

function getCountPrimaryDiagonal(symbol) {
    var count = 0;
    for (var i = 0; i < gBoard.length; i++) {
        var currCell = gBoard[i][i];
        if (currCell === symbol) count++;
    }
    return count;
}

function getCountCol(colIdx, symbol) {
    var count = 0;
    for (var i = 0; i < gBoard.length; i++) {
        var currCell = gBoard[i][colIdx];
        if (currCell === symbol) count++;
    }
    return count;
}

function getCountRow(row, symbol) {
    var count = 0;
    for (var i = 0; i < row.length; i++) {
        if (row[i] === symbol) count++;
    }
    return count;
}

function playComputerMove() {
    var pos = findEmptyPos();
    if (pos) gBoard[pos.i][pos.j] = '⭕️';
    else console.log('Full!');
    return pos;
};

function findEmptyPos() {
    for (var i = 0; i < gBoard.length; i++) {
        for (var j = 0; j < gBoard.length; j++) {
            var currCell = gBoard[i][j];
            if (!currCell) return { i: i, j: j };
        }
    }
    return null;
};

function playUserMove() {
    var isPosFound = false;

    while (!isPosFound) {
        var posStr = prompt('Where?(i,j)');
        // var posStr = '0,0';
        // {i:2,j:1}
        var pos = getPos(posStr);

        if (pos.i < 0 || pos.i > gBoard.length - 1 ||
            pos.j < 0 || pos.j > gBoard.length - 1) {
            console.log('Invalid pos!');
            continue;
        }

        if (gBoard[pos.i][pos.j]) {
            console.log('Already taken!');
            continue;
        }

        isPosFound = true;
        gBoard[pos.i][pos.j] = '❌';
    }
    return pos;
};

function getPos(posStr) {
    var posStrs = posStr.split(',');
    return {
        i: +posStrs[0],
        j: +posStrs[1]
    };
};

function createBoard(length) {
    var board = [];
    for (var i = 0; i < length; i++) {
        board[i] = [];
        for (var j = 0; j < length; j++) {
            board[i][j] = '';
        }
    }
    return board;
}