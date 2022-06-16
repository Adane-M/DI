// const numbers = [5,0,9,1,7,4,2,6,3,8];
// Using the .toString() method convert the array to a string.
// Using the .join()method convert the array to a string. Try passing different values into the join.
// Eg .join(“+”), .join(” “), .join(“”)
// Bonus : To do this Bonus look up how to work with nested for loops
// Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
// The output should be: [9,8,7,6,5,4,3,2,1,0]
// Hint: The algorithm is called “Bubble Sort”
// Use a temporary variable to swap values in the array.
// Use 2 “nested” for loops (Nested means one inside the other).
// Add comments and console.log the result for each step, this will help you understand.
// Requirement: Don’t copy paste solutions from Google



const numbers = [5, 0, 9,-5,-12, 1, 7, 4, 2, 6, 3, 8, 15];
// 1
console.log(numbers.toString());
// 2
console.log(numbers.join("+"));
console.log(numbers.join(" "));
console.log(numbers.join(""));



//  3 bonus
//mimic the sort method.
sortNums(numbers)

function sortNums(nums) {

    var minNum = Infinity; // repesent the smallest num on js
    var MinNumIndex = 0; //index of the smallest num
    var newArray = []; // the array with the resaulte
    var copyArr = nums.slice(); //in every loop slice num stored in to "copyArr" 

    for (var j = 0; j < nums.length; j++) {

        for (var i = 0; i < copyArr.length; i++) {

            if (copyArr[i] < minNum) {
                minNum = copyArr[i];
                MinNumIndex = i;
            }
        }
        newArray.push(minNum);
        // console.log("newArray", newArray);
        copyArr.splice(MinNumIndex, 1);
        minNum = Infinity;
    }
console.log(newArray);
}


