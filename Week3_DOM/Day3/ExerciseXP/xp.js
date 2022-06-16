let elAnim = document.querySelector('#animate');
let elContain = document.querySelectorAll('#container');


function myMove() {
    for (let i = 0; i < 5; i++) {
        elAnim.style.marginLeft = `${i * 88}px`
    }
}


elAnim.addEventListener('dragstart', dragBoxStart);
elAnim.addEventListener('dragend', dropBox);

elContain.forEach(contain =>  {
    contain.addEventListener('dragover', dragOver);
    contain.addEventListener('dragenter', dragEnter);
    contain.addEventListener('dragleave', dragLeave);
    contain.addEventListener('drop', dragDrop);
});



function dragBoxStart(e) {
    e.target.classList.add('hold')
    setTimeout(() =>
(e.target.classList.add('hide'))
        , 0);
};
function dropBox(e) {
    e.target.classList.add('fill')
}


function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over')

}

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over')

}

function dragLeave(e) {

    e.target.classList.remove('drag-over')
    
}

function dragDrop(e) {
    e.target.classList.remove('drag-over')
    e.target.appendChild(elAnim);
    elAnim.classList.remove('hide');

}


