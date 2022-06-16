
let plantes = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"]
let moons = [0, 0, 1, 2, 79, 82, 27, 14, 5];
function init() {
    renderUnivers();
}

function renderUnivers() {
    let elPlanet = document.querySelector(".listPlanets");
    //Bonus
    let strHTML = " ";
    for (let i = 0; i < plantes.length; i++) {
        let elDiv = document.createElement("div");
        elDiv.classList.add(`planet`);
        elDiv.innerText = plantes[i];
        elDiv.style.backgroundColor = getRandomColor();
        elPlanet.appendChild(elDiv);
        //Bonus
        strHTML += `<div class="moon">${plantes[i]}moon</div>`;
        elDiv.innerHTML = strHTML.repeat(moons[i]);
    }

}



function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}