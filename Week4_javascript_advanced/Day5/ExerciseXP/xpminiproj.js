// Mini-Project - Robo-Friends Search

const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    }
];
let grid = document.querySelector('.container');
creatBoard(robots);
function creatBoard(robots) {

    for (let i = 0; i < robots.length; i++) {

        let robImg = robots[i]['image'];
        let name = robots[i]['name'];
        let mail = robots[i]['email'];

        let imgDiv = document.createElement('div');
        imgDiv.classList.add('robimg')
        let img = document.createElement('img');
        let imgText = document.createElement('p');
        let imgTexth3 = document.createElement('h4');
        let imgTexth6 = document.createElement('h6');
        let text = document.createTextNode(name);
        let textMail = document.createTextNode(mail);

        img.setAttribute('src', robImg);
        imgDiv.appendChild(img);
        imgTexth3.appendChild(text);
        imgTexth6.appendChild(textMail);
        imgText.appendChild(imgTexth3);
        imgText.appendChild(imgTexth6);
        imgDiv.appendChild(imgText);
        grid.appendChild(imgDiv);

    }


}

// searchRobot();
function searchRobot() {

    let input = document.querySelector('input').value;
    let inputTxt = input.toUpperCase();
    let jh = grid.getElementsByTagName('div');
    for (let j = 0; j < jh.length; j++) {
        let txt = jh[j].getElementsByTagName('p')[0];
        let txtval = txt.textContent;
        if (txtval.indexOf(inputTxt.toUpperCase()) > -1) {
            jh[j].style.display = ' ';
        } else {
            jh[j].style.display = 'none';

        }
    }

}
