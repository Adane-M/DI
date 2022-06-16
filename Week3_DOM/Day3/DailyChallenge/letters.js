let elInput = document.createElement('input');
elInput.classList.add('type', 'text');
document.body.appendChild(elInput);

elInput.addEventListener('keypress', onlyLetter);

function onlyLetter(e) {

    let letters = /^[A-Za-z]+$/;
    
    if (!e.key.match(letters)) {
        e.preventDefault();
        console.log(e.key); 
    }

}