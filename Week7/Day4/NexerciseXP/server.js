const exp = require('express');
const app = exp();


app.set('view engine', 'ejs')
app.use(exp.static(__dirname + '/public'));
app.use(exp.urlencoded({ extended: true }))
app.use(exp.json());

const lists = [];

app.get('/', (req, res) => {

    res.send('success');
})
app.get('/', (req, res) => {
console.log(lists);
    res.render('views',{lists: lists});
})

app.post('/list', async (req, res) => {
    console.log(req.body);
    const { item, amount } = req.body;
    const currItem = {
        item: item,
        amount: amount
    };
    lists.push(currItem);
    // console.log(lists);
    res.send(lists);
})

app.listen(3000, console.log('listen port 3000'));
