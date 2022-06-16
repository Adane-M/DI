const exp = require('express');
const app = exp();
const ejs = require('ejs');
app.listen(3000 , () => console.log('hiii'))

app.set('view engine', 'ejs');
// app.engine('html')
app.use(exp.static(__dirname + 'public'));
app.use(exp.urlencoded({ extended: false }));
app.use(exp.json());
const feeds = ['sdfsd', 'dsgads']
const lists = [];

app.get('/', (req, res) => {

    res.render('form');
});
app.post('/', (req, res) => {
    const { item, amount } = req.body;
    let newItem = {
        item: item,
        amount: amount
    };
    lists.push(newItem);
    res.send( lists)
})
