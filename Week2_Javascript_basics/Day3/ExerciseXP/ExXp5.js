// Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for loop, console.log the keys of the object.
// Using a for loop, console.log the values of the object.



let companysSal = {
    manager:100000,
    employe:50000,
    brooker:80000,
    cashier:25000,
}

// 2. print keys
for (let key in companysSal) {
    console.log(`salary`, key); 
    
}
// 3. print values

// ans1
console.log(Object.values(companysSal));


// ans2

for(let key in companysSal){
    console.log(companysSal[key]);
}

// ans3
for (const [key,value] of Object.entries(companysSal)) {
    console.log(`${key}:${value}`);
}


  
