
let form = document.querySelector('form');
form.addEventListener('submit', jsonForm1);


///// solution 1
function jsonForm1(e) {
    //prevent the default form actin
    e.preventDefault();
    const data = new FormData(e.target);

    const fromJSON = Object.fromEntries(data.entries());

    const res = JSON.stringify(fromJSON);
    console.log('res', res);
    console.log('res', data.get('fName'));


}

///// solution 2
// function jsonForm2(e) {
//     //prevent the default form actin
//     e.preventDefault();

//     //get the input value
//     let input1 = document.querySelector('form')[0].value;
//     let input2 = document.querySelector('form')[1].value;

//     const fromJs = JSON.parse();


//     //convert the valuse to an objects
//     let textVal = {
//         name: input1,
//         lastName: input2
//     };

//     //convert to json string
//     const jsForm = JSON.stringify(textVal);
//     console.log(jsForm);

// }