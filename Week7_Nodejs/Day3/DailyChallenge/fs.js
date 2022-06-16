const { count } = require('console');
const fs = require('fs');

fs.readFile('./rightToLeft.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('error');
        return;
    };
    countSteps(data);
});

const countSteps = (str) => {
    //str to arr
    let dataToArr = str.split('');
    //<total steps
    let left = 0;
    //>total steps
    let right = 0;
    //-1 encounters
    let count = [];

    dataToArr.forEach(currSign => {

        if (currSign === '<') {
            left++;
            if ((right - left) === -1) {
                let sum = (right + left)
                count.push(sum);
            }
        } else if (currSign === '>') {
            right++;
        }
    });
    console.log(right - left, 'steps to the right');
    console.log('first time in left side is in', count[0]);
}