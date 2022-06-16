// Ex1

let sentence = ["my","favorite","color","is","blue"];

var joined = sentence.join(' ');
console.log(joined);

// Ex2

let word = "sword";
let shell = "shild";

var new1 = ( shell.slice(0,3) + word.slice(3,5));
var new2 =   ( word.slice(0,3) + shell.slice(3,5));
console.log(new1 , new2);


// Ex3

// let fNum = +prompt("choose your first num 0-10");
// let sNum = +prompt("choose your second num 0-10");

// alert (` the sum of those two nums is : ${fNum + sNum}` )

//BONUS
// alert (" the sum of those two nums is : ", fNum - sNum )
// alert (" the sum of those two nums is : ", fNum * sNum )
// alert (" the sum of those two nums is : ", fNum / sNum )