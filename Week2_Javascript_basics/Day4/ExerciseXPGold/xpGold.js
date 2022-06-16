// ex1.

var fvfgf = " ";
isBlank(fvfgf);
function isBlank(str) {
    return (!str || /^\s*$/.test(str));

    // if (!str || str == null || str == " ") {
    //     console.log(true);
    // } else {
    //     console.log(false);
    // }
}

// ex2.


let named = "adan eme"
// console.log(abbrev);

abbrevName(named);
function abbrevName(name) {
    let abbrev = name.split(" ");
    console.log(`${abbrev[0]} ${abbrev[1].charAt(0)}.`);
}

// ex3.
let sente = "aAaA bBb cC"
// upLowCase(sente)
function upLowCase(word) {

    let str = ' ';
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            let char = word[i].toLowerCase();
            str += char;
        } else {
            char = word[i].toUpperCase();
            str += char;

        }
    };
    console.log(str);
}


// ex4.

let arrNumbers = [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]];

isOmnipresent(arrNumbers, 3);
function isOmnipresent(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (!array[i].includes(value)) {
            console.log(false);
            return false
        }
    }
    console.log(true);
    return true;
}