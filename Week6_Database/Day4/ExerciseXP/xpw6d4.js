let grid = document.getElementsByClassName('wraper')[0];

let products = [
    {
        id: 0,
        name: "Deluxe Bicycle",
        url: "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600w-1498702814.jpg",
        price: 499.98
    },
    {
        id: 1,
        name: "Super Deluxe bagpack",
        url: "https://image.shutterstock.com/image-photo/yellow-school-backpack-isolated-on-600w-534499549.jpg",
        price: 134.99
    },
    {
        id: 2,
        name: "Super Duper Scooter",
        url: "https://image.shutterstock.com/image-illustration/yellow-retro-vintage-scooter-isolated-600w-1421727647.jpg",
        price: 1090.95
    },
    {
        id: 3,
        name: "Smartphone",
        url: "https://image.shutterstock.com/image-vector/concept-touch-screen-smartphone-blank-600w-1433190200.jpg",
        price: 399.99
    }
];
function creatBoard() {

    for (let i = 0; i < products.length; i++) {
        let itemImg = products[i]['url'];
        let name = products[i]['name'];
        let itemPrice = products[i]['price'];

        //createing % assign elements
        let img = document.createElement('img');
        let imgDiv = document.createElement('div');
        imgDiv.classList.add(`itemImg-${i}`)
        let imgText = document.createElement('p');
        let imgTexth3 = document.createElement('h4');
        let imgTexth6 = document.createElement('h6');
        let text = document.createTextNode(name);
        let textMail = document.createTextNode(itemPrice);
        //appending to DOM
        img.setAttribute('src', itemImg);
        imgDiv.addEventListener('click', addToCart);
        imgDiv.appendChild(img);
        imgTexth3.appendChild(text);
        imgTexth6.appendChild(textMail);
        imgText.appendChild(imgTexth3);
        imgText.appendChild(imgTexth6);
        imgDiv.appendChild(imgText);
        grid.appendChild(imgDiv);

    }
    // localStorage.clear();

}

let items = [];
const addToCart = (e) => {
    // console.log(`e`, e.path[1].className);
    let a = e.path[1].className.split('').pop();
    // console.log(`a`, a);
            let name = products[a]['name'];
            let itemPrice = products[a]['price'];
            let item = {
                name: name,
                price: itemPrice
            };
            items.push(item);

            localStorage.setItem('cart', JSON.stringify(items));
}


