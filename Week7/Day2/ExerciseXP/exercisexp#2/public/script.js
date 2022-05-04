const getUsers = () => {
    let p = document.getElementsByClassName('p');
    fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(users => {
            p.innerText = users;
        })
        .catch(err => {
            console.log(err, 'error');
        })
};

getUsers();

let btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click', function () {
    alert('Hello from javascript')
});
document.body.appendChild(btn); 