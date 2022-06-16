// ex1.
// evenNum();
function evenNum() {
    let numEven = [];
    for (let i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            continue
        } else {
            numEven.push(i);
        };
    }
    console.log(numEven);
}

// ex2.
let sentd = "abcbA"
// wordCap(sentd);
function wordCap(word) {
    let newWord = [];
    for (let i = 0; i < word.length; i++) {
        let currChar = word[i]
        if (i % 2 === 0) {
            newWord += currChar.toUpperCase();
            continue
        } else {

            newWord += currChar;
        };
    }
    console.log(newWord);
}

// ex3.

// isPalindrome(sentd);

function isPalindrome(str) {
    str =str.toLowerCase();
    let revStr = str.split('').reverse().join('');
(revStr === str)?console.log(true): console.log(false);;
}

// ex4.
const array = [-1,0,3,100, 99, 2, 99] ;// should return 100 
const array2 = ['a', 3, 4, 2]; // should return 4 
const array3 = []; // should return 0


// biggerNum(array2);
function biggerNum(arr) {
    let bigNum = 0;
    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];
        if(!currNum || isNaN(currNum)){
            continue
        } else if (currNum > bigNum) {
            bigNum = currNum
        }

    }
    console.log( bigNum);
    return bigNum;
}
