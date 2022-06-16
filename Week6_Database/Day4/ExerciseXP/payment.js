// let sum = localStorage.getItem();
// console.log();
let container = document.querySelector('.container');
let cart = JSON.parse(localStorage.getItem('cart'));
// console.log(a);
// background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
document.body.style.background = `linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)`
const listItem = () => {
    let count = 0;
    let sum = 0;
    for (const key in cart) {
        let item = cart[key];
        count++
        let list = document.createElement('p');
        list.textContent = `${count}. ${item['name']} : ${item['price']}`
        container.appendChild(list);
        sum += item['price'];
    }

    let totalSum = document.createElement('p');
    totalSum.classList.add('sum')
    totalSum.style.border = `3px solid brown `
    totalSum.style.backgroundColor = `lightgray`
    totalSum.style.fontSize = `20px`
    totalSum.textContent = `your total recipet is : ${sum}`
    container.appendChild(totalSum);
}

 const payment = () => {
     alert(`THANK YOU AND HAVE A GOOD DAY 😄`)
 }