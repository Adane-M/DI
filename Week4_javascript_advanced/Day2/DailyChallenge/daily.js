let client = "Betty";

let groceries = {
    fruits: ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice: "35$",
    other: {
        payed: false,
        meansOfPayment: ["cash", "creditCard"]
    }
}

// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.
const displayGroceries = (groceries["fruits"].forEach(fruit =>
    console.log(`fruit ${fruit}`)));

// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
// In the function, create a variable named shopping that is a copy of the groceries object. (Tip : make the shopping variable equal to the groceries variable)
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
// Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?


cloneGroceries = () => {
    let user = client;
    let shopping = groceries;
    console.log(`user:${user}, shopping:`,shopping );
    return user, shopping;
}
// there is a modification cuse we modifide the real address by the clone addreess.


// Invoke the cloneGroceries function.
cloneGroceries();