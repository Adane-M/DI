let tasks = JSON.parse(localStorage.getItem('Task')) || [];

const displayTask = () => {
    let strHTML = `<table><tr><th>/</th><th>TITLE</th><th>START-TASK</th><th>DAYS LEFT</th>`
    let display = document.getElementsByClassName('wraper')[0];
    
    for (let i = 0; i < tasks.length; i++) {
        let currObj = tasks[i]
        strHTML += `<tr class="task task-${i}"> <td onclick="completeTask(this,${i})" ondblclick="deleteTask(this,${i})">❌</td>`
        for (const key in currObj) {
            let element = currObj[key];
            if (element === false || key === "endTime" || key === "description") {
                continue;
            } else if (key === "name") {
                strHTML += `<td onclick="editTask(this,${i})", onmouseover="displayDescription(this,${i})">${element}</td>`
            } else {
                strHTML += `<td>${element}</td>`
            }
        }
        strHTML += `</tr>`;
    }
    strHTML += `</table>`
    display.innerHTML = strHTML;
}
const completeTask = (e, n) => {
    if (e.textContent === '❌') {
        tasks[n]['isComplete'] = true;
        e.textContent = '✔️';
        e.style.color = 'green'
    } else {
        tasks[n]['isComplete'] = false;
        e.textContent = '❌';
    }
}
const displayDescription = (e, n) => {

    if (e.textContent === tasks[n]['name']) {
        e.textContent = `description: ${tasks[n]['description']}`;
    } else {
        e.textContent = tasks[n]['name'];
    }
}

const deleteTask = (i) => {
    let del = confirm('you sure you want to delete this task?');
    if (del) {
        tasks.splice(i, 1)
        localStorage.setItem('Task', JSON.stringify(tasks));
        displayTask();
    }
}
const editTask = (e, n) => {
    tasks[n]['name'] = prompt('edit your task title,please');
    tasks[n]['description'] = prompt('edit your task description,please');
    localStorage.setItem('Task', JSON.stringify(tasks));
    displayTask();
}
