// const { urlencoded } = require('express');
const exp = require('express');
const app = exp();

let urlencodedParser = exp.urlencoded({ extended: false });
app.set('view engine', 'ejs')
app.engine('html',require('ejs').renderFile)
app.set('views',__dirname + '/views')
app.use(exp.static(__dirname + '/public'));
// app.use()
app.use(exp.json());

const lists = [];

// app.get('/', (req, res) => {
//     res.send('success');
// });

app.get('/', (req, res) => {
console.log(lists);
    res.render('public/form',{lists: lists});
});

app.post('/list',urlencodedParser, (req, res) => {
    console.log(req.body);
    const { item, amount } = req.body;
    const currItem = {
        item: item,
        amount: amount
    };
    lists.push(currItem);
    // console.log(lists);
    // res.send(lists);

res.render('list', lists)
})

app.listen(3000, console.log('listen port 3000'));
