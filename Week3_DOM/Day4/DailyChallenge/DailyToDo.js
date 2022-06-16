
let listTasks = [];
let toDo = document.querySelector('.listTasks');
let text = document.querySelector('#text');

function addTask() {
    let lableItem = document.createElement('labl');
    let t = document.createTextNode(text.value);
    // t = text.value;
    console.log(`t`, t);
    let listItem = document.createElement('input');
    let listItemBtn = document.createElement('button');
    lableItem.appendChild(t);
    lableItem.appendChild(listItem);
    lableItem.appendChild(listItemBtn);
}
