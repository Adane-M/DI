const exp = require('express');
const app = exp();
const li = require('./public/list.json');

app.use(exp.urlencoded({ extended: false }));
app.use(exp.json());
app.use(exp.static(--__dirname + 'public'));

const lists = [];
app.post('/', (req, res) => {
    const { item, price } = req.body;
    if(req){
        res.send({ item, price });
        
    }
    res.send({ item, price });
}).listen(3000 , console.log('Hiii there'))