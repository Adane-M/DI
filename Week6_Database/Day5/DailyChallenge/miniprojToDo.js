document.body.style = `font-family: 'Rubik Puddles', cursive; text-align: center; background-image:linear-gradient(red, yellow, green);   height: 100vh;`
localStorage.clear()
const form = document.forms[0];
const tasks = JSON.parse(localStorage.getItem('Task')) || [];
form.addEventListener('submit', addTask = (e) => {
    e.preventDefault();

    let name = form[0].value;
    let description = form[1].value;
    let startTime = form[2].value;
    let endTime = form[3].value;
    let objForm = {
        name: name,
        description: description,
        startTime: startTime,
        endTime: endTime,
        isComplete: false,
        daysLeft: daysLeft(startTime, endTime)
    }
    tasks.push(objForm);
    localStorage.setItem('Task', JSON.stringify(tasks));
});

const daysLeft = (startTime, endTime) => {
    let start = startTime.split('T');
    let end = endTime.split('T');

    let date1 = new Date(start[0]);
    let date2 = new Date(end[0]);
    let Difference_In_Time = date2.getTime() - date1.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return Difference_In_Days;
}

