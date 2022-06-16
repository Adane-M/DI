// Exercise 4 : Building Management
// Instructions
// let building = {
//     numberOfFloors : 4,
//     numberOfAptByFloor : {
//         firstFloor : 3,
//         secondFloor : 4,
//         thirdFloor : 9,
//         fourthFloor : 2,
//     },
//     nameOfTenants : ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan :  [4, 1000],
//         david : [1, 500],
//     },
// }
// Copy and paste this object to your Javascript file.

// Console.log the number of floors in the building.

// Console.log how many apartments are on the floors 1 and 3.

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

// 1.
let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}

// 2.
console.log(building["numberOfFloors"]);
// 3.
console.log("1st floor has:", building["numberOfAptByFloor"]["firstFloor"] ,"apartments, ","3rd floor has :", building["numberOfAptByFloor"]["thirdFloor"], "apartments" );

// 4.
let roomRent = building["numberOfRoomsAndRent"];
// console.log(roomRent);
console.log(`${building["nameOfTenants"][1]}, has ${building["numberOfRoomsAndRent"]["dan"][0]} room `);

// 5.
let sumRent = roomRent["david"][1] + roomRent["sarah"][1] 


if(sumRent < roomRent["dan"][1]) {

    roomRent["dan"][1] = 1200;
} else {
    console.log(`their sum is ${sumRent} which is bigger then dan's rent `);
}