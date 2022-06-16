// https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD
myApi = "f163a6717e763c59967b0866";
let select = document.getElementsByTagName('select');
let input = document.getElementsByTagName('input');

console.log(select[0]);

// const val = fetch(`https://v6.exchangerate-api.com/v6/${myApi}/latest/USD/`)
const val = fetch(` https://v6.exchangerate-api.com/v6/f163a6717e763c59967b0866/latest/USD`)
    .then(val => val.json())
    .then(data => display(data['conversion_rates']))

const val1 = fetch(`https://v6.exchangerate-api.com/v6/f163a6717e763c59967b0866/pair/EUR/GBP`)
    .then(val1 => val1.json())
    .then(data => console.log(data))

function display(data) {
    const entries = Object.entries(data);
    for (var i = 0; i < entries.length; i++) {
        select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]} : ${entries[i][1]}</option>`;
        select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]} : ${entries[i][1]}</option>`;
    }
}

// function convert(){
    
// }