const fs = require('fs');
//reedfile
fs.readFile('./book.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err, 'erroor');
        return;
    };

    console.log(data);
})
//create new txt file
let newText = 'old days render in the futuer'
fs.writeFile('./cover.txt', newText, (err) => {
    if (err) {
        console.log(err);
        return;
    };
    console.log('appande additional data completed.');
});

//add text to the new txt file
let addText = '...while today is the best present';
fs.appendFile('./cover.txt', addText +'\n', (err) => {
    if (err) {
        console.log(err);
        return
    };
});

// delete the new txt file
// fs.unlink('./cover.txt',(err) => {console.log(err,'errorry');})