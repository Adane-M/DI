let container = document.getElementsByTagName('div');
let btn = document.getElementsByTagName('button')[0];

//fetch Data
async function getName() {
    let randNum = Math.floor((Math.random() * 80) + 1);
    const response = await fetch(`https://swapi.dev/api/people/${randNum}/`)
    if (response.status !== 200) {
        throw new Error('page not found!, please try again');
    } else {
        loading();
        const res = await response.json();
        console.log(res);
        displayData(res); 
    }
}
// display data on the DOM
async function displayData(res) {
    try {
        let home = await fetch(res['homeworld']);
        let homeRes = await home.json();
        container[1].textContent = `Name :  ${res['name']}`;
        container[2].textContent = `Height :  ${res['height']}`;
        container[3].textContent = `Gender :  ${res['gender']}`;
        container[4].textContent = `B-Day :  ${res['birth_year']}`;
        container[5].textContent = `Home-World :  ${homeRes['name']}`;
        
    } catch (error) {
        container[0].textContent = 'saionara';
    }
    
}
//while loading data
function loading(){
    let strHTML = `<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>`
    container[1].innerHTML = strHTML;
    container[2].textContent ='';
    container[3].textContent ='';
    container[4].textContent ='';
    container[5].textContent ='';
}