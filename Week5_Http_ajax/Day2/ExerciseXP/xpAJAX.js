
    function getGif() {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
        xhr.responseType = 'json';
        xhr.send();

        xhr.onload = () => {
            if (xhr.status === 200) {
                let res = xhr.response.data;
                console.log('Javascript Object res:', xhr.response);
                let resUrl = res.map(element => {
                    if (element['url'].includes('hilarious')) {
                        let elul = document.getElementsByTagName('ul')[0];
                        let elli = document.createElement('li');
                        let eltext = document.createTextNode(element['url']);
                        // let ela = document.createElement('a');
                        // ela.setAttribute('href', eltext);
                        // ela.innerText = element['id'];
                        // ela.appendChild(eltext);
                        elli.appendChild(eltext);
                        elul.appendChild(elli);
                    }
                });
                console.log(resUrl);

                let resRating = res.filter(element => {
                    if (element.value === '1') {
                        console.log(element['rating']);
                    } else {
                        console.log(`Rating dosent match the search`);
                    }
                });
                console.log(resRating);


                let resApi = res.filter(element => {
                    if (element.value === 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My') {
                        console.log(element['rating']);
                    } else {
                        console.log(`API dosent match the search`);
                    }
                });

                console.log(resApi);

                
            } else {
                console.log("error");
            }
        }
        
        /////////   EX2   ////////////
        setTimeout( ()=>{

            let xhr02 = new XMLHttpRequest();
            xhr02.open('GET', "http://api.giphy.com/v1/gifs/trending");
            xhr02.send();
    
            xhr02.onload = () => {
                if (xhr02.status === 200) {
                    let res02 = xhr02.response.data;
                    let sunRes = res02.data.filter(element => {
                        if (element['url'] === 'su') {
                            console.log(element);
                        }
                    });
                    console.log(sunRes);
                }
            }
        },3000)


    }