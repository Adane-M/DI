// // -------------------------
// // Local storage
// // -------------------------

// // console.log("LocalStorage = ", localStorage)

// // //Add an item
// // localStorage.setItem("username", "Lea");
// // localStorage.setItem("age", 30);
// // console.log("LocalStorage = ", localStorage)

// // //Get an item
// // let userName = localStorage.getItem("username");
// // let h1 = document.createElement("h1");
// // h1.textContent = `The name of the user is ${userName}`
// // document.body.appendChild(h1)

// // localStorage.removeItem("name")
// // localStorage.clear()


// // -------------------------
// // Local storage and object
// // -------------------------

let form = document.getElementById("formfirst");

let allcars = JSON.parse(localStorage.getItem("car")) || [];

const addItem = (e) => {
	e.preventDefault();

	let firstInput = document.getElementById("brand");
	let secondInput = document.getElementById("color");

	if (firstInput.value != "" && secondInput.value != "") {
		
		let objectItem = {
			brand : firstInput.value,
			color : secondInput.value
		}

		allcars.push(objectItem)

		// let objectItem = {
		// 	brand : "bmw",
		// 	color : "yellow"
		// }

		// need to stringify
		localStorage.setItem("car", JSON.stringify(allcars))
		

		displayItem()
	}
}

const displayItem = () => {
	let results = document.getElementById("results");
	//need to parse
	let res = JSON.parse(localStorage.getItem("car"));
	console.log(res)
	// let p = document.createElement("p");
	// p.textContent = `${res.brand}:${res.color}`
	// results.appendChild(p)
} 

form.addEventListener("submit", addItem);