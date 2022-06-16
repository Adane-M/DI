const exp = require('express');
const app = exp();

app.use(exp.urlencoded({extended: false}));
app.use(exp.json());
app.use(exp.static('public'));

app.post('/',(req, res) => {
    const {name, adress, phone, email} = req.body;
    res.send({
       name,
       adress,
       phone,
       email 
    });
}).listen(3001)
