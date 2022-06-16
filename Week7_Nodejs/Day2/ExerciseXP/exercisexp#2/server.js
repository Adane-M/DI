const express = require('express');
const app = express();
const user = {
    firstname: 'John',
    lastname: 'Doe'
};
// EX1
app.use(express.static('public'))

app.get('/users', (req, res) => {
    res.json(user);
    res.end(user);
}).listen(3000,console.log(`server running on port 3000`,user));

// EX2
app.get('/:id', (req, res) => {
    console.log(req); 
    res.json(req.params.id);
    res.send('the id is:' + req.params.id);
}).listen(3000, console.log(`server running on port 3000`))

// EX3
app.get('/', (req, res) => {
    res.json(user);
    res.end(user);
}).listen(3000);
