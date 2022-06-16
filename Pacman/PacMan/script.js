function sendData() {
  let user_name = document.getElementById('user').value;
  let board = document.querySelector('.board-container');
  board.style.visibility = 'visible'

  let userdata = {
    user_name,
    score: score
  }
  fetch('http://localhost:5500/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userdata)
  })
    .then(res => res.json())
    .then(data => {
      console.log('data', data);
      document.getElementById('root').textContent = data
      displayUser(user_name);
    })
    .catch(err => {
      console.log(err);
    })
}
function displayUser(data) {
  document.querySelector('.player').textContent = data;

};

function getData() {
  fetch('http://localhost:5500/show')
    .then(res => res.json())
    .then(data => {
      showUsers(data);
    })
}

function showUsers(data) {
  let root = document.getElementById('root');
  root.innerHTML = "";
  data.forEach(item => {
    let div = document.createElement('div');
    div.innerText = item.user_name;
    root.appendChild(div)
  })
}

function findData() {
  let user_name = document.getElementById('user').value;
  let userdata = {
    user_name,
  }
  fetch('http://localhost:5500/find', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userdata)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.getElementById('root').innerHTML = `${data}`
    })
    .catch(err => {
      console.log('error', err);
    })
}
