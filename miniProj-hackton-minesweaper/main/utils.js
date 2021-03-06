

function buildBoard(length) {
    var board = [];

    for (let i = 0; i < length; i++) {
        board.push([])

        for (let j = 0; j < length; j++) {

            board[i][j] = {
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: false
            }
        }
 
    }

    return board;
}


function renderBoard(mat, selctor) {
    var strHTML = '<table><tbody>';
    for (let i = 0; i < mat.length; i++) {
        strHTML += `<tr>`;
        for (let j = 0; j < mat[0].length; j++) {
            var cell = mat[i][j];
            cell = EMPTY;
            if (cell === MINE) {
                !cell.isMine
                !cell.isShown
                cell.minesAroundCount = setMinesAroundCount(mat, i, j)
            }

            var cellClass = `cell cell-${i}-${j}`;
            strHTML += `<td class="${cellClass}" onclick="cellClicked(this, ${i}, ${j})" oncontextmenu="cellMarkedCount(event, this, ${i}, ${j})"></td>`;
        }
        strHTML += `</tr>`;
    }
    strHTML += `</tbody></table>`
    
    var elBoard = document.querySelector(selctor)
    elBoard.innerHTML = strHTML;
}

// location such as: {i: 2, j: 7}
function renderCell(location, value) {
    // Select the elCell and set the value
    var elCell = document.querySelector(`.cell-${location.i}-${location.j}`);
    elCell.innerHTML = value;
    
}

function mode1() {
    gLevel.SIZE = 4;
    gLevel.MINES = 2;
    initGame();
}

function mode2() {
    gLevel.SIZE = 8;
    gLevel.MINES = 12;
    initGame();
}

function mode3() {
    gLevel.SIZE = 12;
    gLevel.MINES = 30;
    initGame();
}


function startStopWatch() {
    gWatchInterval = setInterval(updateWatch, 1)
    gStartTime = Date.now()
}

function updateWatch() {
    let now = Date.now()
    let time = ((now - gStartTime) / 1000).toFixed()
    if (time < 10) {
        // '00', (time)
        elTime.textContent = `00${time}`;

    } else if (time < 100) {
        elTime.textContent = `0${time}`;

        // '0', (time)
    } else {
        elTime.textContent = time;

    }
    gGame.secsPassed++;
}

function endStopWatch() {
    clearInterval(gWatchInterval)
    gGame.secsPassed = 0;
    gWatchInterval = null
    elTime.textContent = '000';
}



function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
    function shuffle(items) {
        let randIdx, keep, i;
        for (i = items.length - 1; i > 0; i--) {
    
            randIdx = getRandomIntInclusive(0, items.length - 1);
            keep = items[i];
            items[i] = items[randIdx];
            items[randIdx] = keep;
        }
        return items;
    }
    
    
    
    function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
