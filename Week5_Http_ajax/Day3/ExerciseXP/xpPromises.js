
// Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10.

compareToTen(20);
function compareToTen(num) {
    let promise = new Promise((resolve, reject) => {
        let getNum = num;
        if (getNum > 10) {
            resolve(`yep ${getNum} is bigger then 10, success!!`)
        } else {
            reject(`no , ${getNum} is less then 10,  error!`)
        }
    });

    promise.then((fromRes) => console.log(fromRes)).catch((fromRej) => console.log(fromRej));


};

// Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.

Promise.resolve('success <self Resolve>').then(function (val) {
    setTimeout(() => {
        console.log(val);
    }, 4000)
});
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.
Promise.resolve(10).then(res => res > 10 ? console.log(res):console.log('err'))
.catch(error => console.log(error))


// Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
Promise.resolve(3)
.then(res => console.log(res));

// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
Promise.reject('Boo!')
.catch(res => console.log(res));
