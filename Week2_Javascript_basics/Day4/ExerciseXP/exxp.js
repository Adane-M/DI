// ex1.


// infoAboutMe();
function infoAboutMe() {
    console.log("Me Myself & I");
}

// infoAboutMe("David", 45, "blue");
// infoAboutMe("Josh", 12, "yellow");
function infoAboutMe(name, age, color) {
    console.log(` my name is ${name},my age is ${age}, & i love the color${color}`);
}


// ex2.

// let userBill = +prompt("whats your bill?")
// calculateTip(userBill);
function calculateTip(bill) {
    let tipA = bill * 0.2;
    let tipB = bill * 0.15;
    let tipC = bill * 0.1;
    if (bill < 50) {
        console.log(`your tip is: ${tipA} and the total bill is ${bill + tipA}`);
    } else if (bill < 200) {
        console.log(`your tip is: ${tipB} and the total bill is ${bill + tipB}`);
    } else {
        console.log(`your tip is: ${tipC} and the total bill is ${bill + tipC}`);
    }
}

// ex3.

// isDivisible(23);
function isDivisible(divisor) {

    let divArr = [];
    let sum = 0;
    for (let i = 0; i < 500; i++) {
        if (i % divisor === 0) {
            divArr.push(i)
            sum += i;
        }
    }
    console.log(` ${divArr}`);
    console.log(`sum ${sum}`);
    return divArr;

}

// ex4.


let stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

let prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

let shoppingList = ["banana", "orange", "apple"];

myBill();
function myBill() {
    let sum = 0;
    for (let i = 0; i < shoppingList.length; i++) {
        let currProduct = shoppingList[i]
        for (let key in stock) {
            if (!stock[key]) {
                continue
            } else if (currProduct === key) {
                stock[key] -= 1;
                for (let keyp in prices) {
                    if (keyp === key) {
                        sum += prices[keyp];
                    }
                }

            }
        }


    }
    // console.log(sum);
    return `your total bill is :${sum}`;
}

// ex5.
// changeEnough(100, [25, 50 , 75, 60]);

function changeEnough(itemPrice, amountOfChange) {

    let sumChange = 0;
    for (let i = 0; i < amountOfChange.length; i++) {
        let currChange = amountOfChange[i]
        switch (i) {
            case 0:
                currChange *= 0.25;
                break;
            case 1:
                currChange *= 0.10;
                break;
            case 2:
                currChange *= 0.05;
                break;
            case 3:
                currChange *= 0.01;
                break;

            default:
                break;
        }
        sumChange += currChange;
    }
    if (itemPrice > sumChange) {
        return true
    } else {
        return false
    };
}

// ex6.
hotelCost();
function hotelCost() {

    let nights = 5;
    let totalnicost;
    do {
        // let nights = +prompt("for how many nights ,please?");
        totalnicost = nights * 140;

    } while (isNaN(nights) || nights == " ");
    return totalnicost;
}

// 2.
function planeRideCost() {
    let destination = "Ashqelon";

    do {

        // let destination = prompt("write is your destination?")        
        if(destination === "Petah-tikva") {
            return 5500;
        } else if (destination === "Ashqelon") {
            return 20500;
        } else {
            return 50000;
        }
    
    } while (!isNaN(destination) );

}

// 3.

function rentalCarCost() {
    // let rentDays = +prompt("for how many nights ,please?");
    let rentDays = 5;
    let Cost;

    do {
        if (rentDays > 10) {
            Cost = rentDays * 40 * 0.05;
        } else {
            Cost = rentDays * 40;
        }
    } while (isNaN(rentDays) || rentDays == " ");
    return Cost;
}

// 4.
totalVacationCost();

function totalVacationCost() {
    let totalVacaCost = (
        hotelCost() +
        planeRideCost() +
        rentalCarCost());
    console.log( `your total cost is :${totalVacaCost}`);
    return `your total cost is : ${totalVacaCost}`;
}
