const exp = require('express');
const app = exp();
const bp = require('body-parser');

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
// part1
app.get('/aboutMe/:hobby', (req, res) => {
    if (isNaN(req.params.hobby)) {
        res.send('your hobby is : ' + req.params.hobby)
    } else {
        res.status = 404;
        res.send(404)
        console.log('u fucked up');
    }
});
// part2
app.get('/pic', (req, res) => {
    const imgUrl = `https://w7.pngwing.com/pngs/895/199/png-transparent-spider-man-heroes-download-with-transparent-background-free-thumbnail.png`
    res.send(`<img src=${imgUrl} alt="spider-Man"></img>`)

});
// part3
app.use(express.static('public'))
app.post('/formData', (req, res) => {
    let form = req.body;
    res.send(`${form.email} you got mail:, ${form.messeage}`)
});

app.listen(3000, console.log('Yes'));