let container = document.querySelector('.container');
let TIC = '✖️';
let TAC = '🔘';
let gBoard;

gBoard = buildBoard(3); 

function buildBoard(size) {
    let board = [];
    let strHTML = `<table><tbody>`;
    for (let i = 0; i < size; i++) {
        board[i] = [];
        strHTML += `<tr class="row">`;
        for (let j = 0; j < size; j++) {
            board[i][j] = '';
            strHTML += `<td class="col col-${i}-${j}" onclick="playGame(this, ${i},${j})"></td>`;
        }
        strHTML += `</tr>`;
    }
    strHTML += `</table></tbody>`;
    container.innerHTML = strHTML;
    console.table(board);
    return board;
}

// let playerPos = [];
function playGame(elCell, i, j) {

    if (elCell.classList.contains('.clicked')) {
    return;
    } else {
        elCell.classList.add('.clicked')
    }
    //     playerPos.push({
    //     i: i,
    //     j: j
    // });
    // console.log(playerPos);

    if (elCell.textContent === '') {
        elCell.textContent = TAC;
        checkWin(i,j);
    } else {
        return;
    }

    // for (let i = 0; i < playerPos.length; i++) {
    //     for (let j = 0; j < playerPos[i].length; j++) {
    //         console.log(playerPos[i][j]);
    //     }
    // }
}

function checkWin(i,j){





}


