const elGrid = document.querySelector('.grid');
const elSide = document.querySelector('.side');
let mouseDown = false;
let elColor = '';
document.body.addEventListener('mouseup', () => {mouseDown = false;});
document.body.addEventListener('mousedown', () => {mouseDown = true;});
creatBoard(70);

function creatBoard(size) {
    //creat side color panel.
    for (let i = 0; i < 21; i++) {
        const cell = document.createElement('div');
        cell.setAttribute('class', `color cell-${i}`);
        elSide.appendChild(cell);
        cell.style.backgroundColor = `${getRandomColor()}`;

        cell.addEventListener('click', function (e) {
            clickSide(cell);
        });

    }
    //creat painting board
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.setAttribute('class', `cell cell-${i}`)
        elGrid.appendChild(cell);

        cell.addEventListener('mousedown', function (e) {
            mouseDown = true;
            if (elColor !== '') {
                e.target.style.backgroundColor = elColor
            }
        });

        cell.addEventListener('mouseover', function (e) {
            if (elColor !== '' && mouseDown) {
                e.target.style.backgroundColor = elColor
            }
        });

    }
    const elGridCell = document.querySelectorAll('.cell');
    let elBtn = document.createElement('button');
    elBtn.addEventListener('click', () => {
        elGridCell.forEach(element => {

            element.style.backgroundColor = 'white';
        });
        console.log('hielGridCell', elGridCell);
    });
    elBtn.textContent = 'Clear';
    document.body.appendChild(elBtn);
}

function clickSide(elCell) {
    elColor = elCell.style.backgroundColor;
    return elColor
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
