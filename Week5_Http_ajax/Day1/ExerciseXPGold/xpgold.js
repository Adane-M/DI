let form = document.querySelector('form');
let FormData = new FormData(document.forms.person);
// console.log(FormData);
form.addEventListener('submit',printBdy)

function printBdy(e) {
    //prevent the default form actin
    // e.preventDefault();
    const data = new FormData(e.target);
    const fromJSON = Object.fromEntries(data.entries());
    const res = JSON.stringify(fromJSON);
    anotherHtml.textContent = res;
    // console.log('res', res);
    return res;
}
debugger
let xhr = new XMLHttpRequest();
xhr.open("POST","/another.html");
// xhr.send(FormData)
xhr.send();
xhr.onload = () => console.log(xhr.response);

