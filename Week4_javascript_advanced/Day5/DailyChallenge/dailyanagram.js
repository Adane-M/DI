// Daily Challenge: Anagram
// Instructions
// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// Some Help

// What is an anagram?
// An anagram is another word or phrase formed by rearranging letters of the first word or phrase.

let wordA = 'yaba daba doo';
let wordB = 'baba buba';
checkAnagram("Astronomer","moon stArer");
checkAnagram(wordA, wordB);

function checkAnagram(str1, str2) {
//turn string to array of chars
    let a = str1.split("");
    let b = str2.split("");

    let wordArr1 = [];
    let wordArr2 = [];

//pop every empty char
    a.forEach(char => {
        if (char !== ' ') {
            wordArr1.push(char);
        }
    });

    b.forEach(char => {
        if (char !== ' ') {
            wordArr2.push(char);
        }
    });
//compare the length of the two new arrays
    if (wordArr1.length !== wordArr2.length) {
        console.log(`sorry but the length of '${str1}' is NOT equel '${str2}' length`);
        return;
    } else {
        //convert the array to a string after it sorted
        let comparWord2 = wordArr2.sort().join().toLowerCase();
        let comparWord1 = wordArr1.sort().join().toLowerCase();
        
        console.log(comparWord1, comparWord2);
        if (comparWord1 !== comparWord2) {
            console.log(`${str1} is NOT an anagram of ${str2}`);
            return false;
        } else {
            console.log(`${str1} is an anagram of ${str2}`);
            return true;
        }

    }

}
