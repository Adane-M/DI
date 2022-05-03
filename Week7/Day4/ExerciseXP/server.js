const exp = require('express');
const app = exp();

app.set('view engine', 'ejs');
app.use(exp.urlencoded({extended: false}));
app.use(exp.json());
app.use(exp.static('public'));


const items = [];

app.post('/', (req, res) => {
    const { item, amount } = req.body;
    const newItem = {
        item: item,
        amount: amount
    };
    items.push(newItem);
    res.send(items)
    res.render('index', {items:items})
    console.log(items);
    // res.end()
});

app.get('/index.', (req, res) => {
    const { item, amount } = req.body;
    const newItem = {
        item: item,
        amount: amount
    };
    items.push(newItem);
    res.json(items)
    res.render('index', { items: items });
});

// app.get('/', (req, res) => {
//     res.render('index',{ items: items});
// });

app.listen(3000, console.log('yahoooo!!!'))
