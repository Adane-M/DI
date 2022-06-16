// Exercise 6
// Instructions
// let details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”


let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}

let str = ' ';
for(let key in details){

str += ` ${key} ${details[key]}`;
}

console.log(str);
