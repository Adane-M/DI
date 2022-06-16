
function searchGif(e) {
    // console.log(e);
    let inpVal = e.value.toLowerCase();
    // console.log(inpVal);
    makeRequest(inpVal)
};
function deleteAll(){
   //removing the container element.
    document.getElementById('container').remove();
}

function makeRequest(random) {
    let xhr = new XMLHttpRequest();
    // xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
    xhr.open("GET", `https://api.giphy.com/v1/gifs/random?tag=${random}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = () => {
        if (xhr.status === 200) {
            let res = xhr.response.data;
            //geting url response and appende to a new element
            let imgUrl = res['images']['original']['url'];
            let elContainer = document.getElementById('container');
            let elTd = document.createElement('td');
            let btn = document.createElement('button');
            btn.innerText = 'X';

            //remove the specific gif by click. 
            btn.addEventListener('click' ,function(e) {
                e.target.parentElement.remove()
            });
            //appending all elements to the container.
            let elimg = document.createElement('img');
            elimg.setAttribute('src', imgUrl);
            elimg.style.height = '80px';
            elTd.appendChild(btn);
            elTd.appendChild(elimg);
            elContainer.appendChild(elTd);

            console.log('data loaded');
        } else {
            console.log('error page not found!');
        }
    }

}