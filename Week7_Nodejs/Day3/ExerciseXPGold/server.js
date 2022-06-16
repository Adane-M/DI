const exp = require('express');
const app = exp();
const appUrl = exp.urlencoded({ extended: false }); 
// app.use();
app.use(exp.json());
app.use(exp.static(__dirname + 'public'));

app.listen(5000 , console.log('Hiii there'));
const lists = [];
app.get('/' , (req , res) => {
    console.log('hii');
    res.sendFile(__dirname + 'index.html')
});

app.post('/',appUrl, (req, res) => {
    const { item, price } = req.body;
    res.send({ item, price });
});
