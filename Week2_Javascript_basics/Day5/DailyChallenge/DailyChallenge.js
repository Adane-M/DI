

function popNum() {
    let bottleNum = +prompt("choose num of beers to put on the wall");
    bottleSong(bottleNum);
}



function bottleSong(num) {
    
    let elH3 = document.querySelector("h3");

    for (let count = 1; ; (num -= count++)) {
        if (count === 1) {
            console.log(`"${num} bottles of beer on the wall
            ${num} bottles of beer
            Take ${count} down, pass it around
            ${num} bottles of beer on the wall"`);

            elH3.innerText = `"${num} bottles of beer on the wall
                ${num} bottles of beer
                Take ${count} down, pass it around
                ${num} bottles of beer on the wall"`;




        } else {
            console.log(`"${num} bottles of beer on the wall
            ${num} bottles of beer
            Take ${count} down, pass them around
            ${num} bottles of beer on the wall"`);
        }


        if ( num === count) {
            console.log(`"0 bottles of beer on the wall
            0 bottles of beer"`);
            break;
        } else if (num < count) {
            console.log(`"No bottles of beer on the wall!!!
            No bottles of beer!"`);
            break;
        }

    }

}