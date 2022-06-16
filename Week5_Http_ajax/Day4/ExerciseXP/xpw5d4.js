// Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:

// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(result => console.log(result));
// fetchUrl();
async function fetchUrl(){
    try {
        const url = await fetch("https://swapi.dev/api/starships/9/")
        const response = await url.json();
        console.log(response);
        return response;
    } catch (error) {
        console.log('ooops', error);
    }

}

// Exercise 2: Analyze
// Analyze the code provided above what will be the outcome?
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall(); //calling., the result is frpm the async func.
